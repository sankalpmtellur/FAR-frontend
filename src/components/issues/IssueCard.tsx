import { motion } from 'framer-motion'
import { Building2, CalendarDays, Layers, Trash2 } from 'lucide-react'
import type { Issue } from '../../types/issue'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

const issueBadgeStyles: Record<Issue['type'], string> = {
  Crack: 'bg-red-100 text-red-700',
  'Broken Tile': 'bg-orange-100 text-orange-700',
  'Water Leakage': 'bg-orange-100 text-orange-700',
  'Electrical Issue': 'bg-red-100 text-red-700',
}

export function IssueCard({ issue, onDelete }: { issue: Issue; onDelete: (id: string) => void }) {
  return (
    <motion.div whileHover={{ scale: 1.015, y: -2 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
      <Card className="overflow-hidden rounded-2xl border-orange-100 bg-white shadow-md transition hover:shadow-xl">
        <div className="relative">
          <img src={issue.image} alt={issue.type} className="h-52 w-full object-cover" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        <CardContent className="space-y-4 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge className={`rounded-lg border-0 ${issueBadgeStyles[issue.type]}`}>{issue.type}</Badge>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <CalendarDays className="h-3.5 w-3.5" />
              {issue.createdAt.toLocaleDateString()}
            </span>
          </div>

          <div className="space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2 font-medium text-slate-800">
              <Building2 className="h-4 w-4 text-orange-500" />
              {issue.building}
            </p>
            {issue.floor ? (
              <p className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-red-500" />
                Floor {issue.floor}
              </p>
            ) : null}
            <p className="line-clamp-3 leading-relaxed">{issue.description}</p>
          </div>

          <Button
            variant="outline"
            className="h-10 w-full rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={() => onDelete(issue.id)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Issue
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

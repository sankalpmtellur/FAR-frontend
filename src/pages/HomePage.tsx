import { motion } from 'framer-motion'
import { CircleAlert, Clock3, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Issue } from '../types/issue'
import { IssueCard } from '../components/issues/IssueCard'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export function HomePage({ issues }: { issues: Issue[] }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-6xl space-y-10 px-4 pb-16 pt-8 sm:px-6 lg:px-8"
    >
      <section className="relative overflow-hidden rounded-3xl border border-red-100/80 bg-gradient-to-br from-white via-red-50 to-orange-50 p-8 shadow-lg sm:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-red-200/40 blur-3xl" />

        <div className="relative max-w-2xl space-y-5">
          <p className="inline-flex rounded-full border border-red-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
            Safer Campuses, Faster Fixes
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Report Campus Issues Easily</h1>
          <p className="text-base text-slate-600 sm:text-lg">
            Spot a crack, leak, or electrical problem? Upload it in seconds so the maintenance team can act quickly.
          </p>
          <Button asChild className="h-11 w-full rounded-xl bg-red-500 px-6 text-white hover:bg-red-600 sm:w-auto">
            <Link to="/report">Report Issue</Link>
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="rounded-2xl border-red-100/70 bg-white shadow-md">
          <CardContent className="flex items-center gap-3 p-4">
            <span className="rounded-xl bg-red-100 p-2 text-red-600">
              <CircleAlert className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Active Reports</p>
              <p className="text-xl font-semibold text-slate-900">{issues.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-orange-100/80 bg-white shadow-md">
          <CardContent className="flex items-center gap-3 p-4">
            <span className="rounded-xl bg-orange-100 p-2 text-orange-600">
              <Clock3 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Recent Window</p>
              <p className="text-xl font-semibold text-slate-900">Last 7 Days</p>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl border-emerald-100/80 bg-white shadow-md">
          <CardContent className="flex items-center gap-3 p-4">
            <span className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Goal</p>
              <p className="text-xl font-semibold text-slate-900">Safer Campus</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Recent Reports</h2>
          <p className="text-sm text-slate-500">{issues.length} active issues</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </section>
    </motion.main>
  )
}

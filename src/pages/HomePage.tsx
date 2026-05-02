import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import type { Issue } from '../types/issue'
import { IssueCard } from '../components/issues/IssueCard'
import { Button } from '../components/ui/button'

export function HomePage({ issues, onDeleteIssue }: { issues: Issue[]; onDeleteIssue: (id: string) => void }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-6xl space-y-8 px-4 pb-12 pt-6 sm:space-y-10 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8"
    >
      <section className="relative overflow-hidden rounded-3xl border border-orange-200/80 bg-gradient-to-br from-white via-orange-50 to-red-50 p-5 shadow-lg sm:p-8 lg:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-red-300/35 blur-3xl" />

        <div className="relative grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl space-y-4 sm:space-y-5">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">Report Campus Issues Easily</h1>
            <p className="text-sm text-slate-700 sm:text-base lg:text-lg">
              Spot a crack, leak, or electrical problem and report it in seconds with structured details and photos.
            </p>
            <Button asChild className="h-11 w-full rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-6 text-white hover:from-red-600 hover:to-orange-600 sm:w-auto">
              <Link to="/report">Report Issue</Link>
            </Button>
          </div>

          <div className="mx-auto flex w-full max-w-xs items-center justify-center rounded-3xl border border-orange-200 bg-white/70 p-6 shadow-md">
            <img src={logo} alt="Campus safety mark" className="h-36 w-auto object-contain sm:h-44" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Recent Reports</h2>
          <p className="text-sm text-slate-500">Tap any card to review, or delete when resolved.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} onDelete={onDeleteIssue} />
          ))}
        </div>
      </section>
    </motion.main>
  )
}

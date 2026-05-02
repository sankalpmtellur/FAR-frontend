import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
      <p className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">404</p>
      <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
      <p className="max-w-md text-slate-600">The page you are looking for does not exist or may have been moved.</p>
      <Button asChild className="rounded-xl bg-red-500 text-white hover:bg-red-600">
        <Link to="/">Back to Home</Link>
      </Button>
    </main>
  )
}

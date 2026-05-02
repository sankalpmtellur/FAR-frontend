import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-xl rounded-3xl border-red-100 bg-white shadow-lg">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
          <p className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-600">404</p>
          <h1 className="text-3xl font-bold text-slate-900">Page Not Found</h1>
          <p className="max-w-md text-slate-600">The page you are looking for does not exist or may have been moved.</p>
          <Button asChild className="h-10 rounded-xl bg-red-500 text-white hover:bg-red-600">
            <Link to="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

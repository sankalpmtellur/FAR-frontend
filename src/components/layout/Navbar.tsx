import { AlertTriangle } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
          <span className="rounded-xl bg-red-500/10 p-2 text-red-500">
            <AlertTriangle className="h-4 w-4" />
          </span>
          Campus Issue Reporter
        </NavLink>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive ? 'bg-red-50 text-red-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Home
          </NavLink>
          <Button asChild className="rounded-xl bg-red-500 px-4 text-white hover:bg-red-600">
            <NavLink to="/report">Report Issue</NavLink>
          </Button>
        </nav>
      </div>
    </header>
  )
}

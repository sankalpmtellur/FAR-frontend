import { AlertTriangle, Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
          <span className="rounded-2xl bg-gradient-to-br from-red-500/15 to-orange-500/15 p-2 text-red-500">
            <AlertTriangle className="h-4 w-4" />
          </span>
          Campus Issue Reporter
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-red-50 to-orange-50 text-red-600'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`
            }
          >
            Home
          </NavLink>
          <Button asChild className="h-10 rounded-xl bg-red-500 px-4 text-white hover:bg-red-600">
            <NavLink to="/report">Report Issue</NavLink>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-red-100 bg-white text-slate-700 hover:bg-red-50 md:hidden"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-red-100 bg-white">
            <SheetHeader className="pb-0">
              <SheetTitle>Campus Issue Reporter</SheetTitle>
              <SheetDescription>Navigate quickly and report new campus issues.</SheetDescription>
            </SheetHeader>
            <div className="space-y-2 p-4">
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2 text-sm font-medium ${
                      isActive ? 'bg-red-50 text-red-600' : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  Home
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="h-10 w-full rounded-xl bg-red-500 text-white hover:bg-red-600">
                  <NavLink to="/report">Report Issue</NavLink>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

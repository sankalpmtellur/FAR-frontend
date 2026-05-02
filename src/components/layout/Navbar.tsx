import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
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
    <header className="sticky top-0 z-50 border-b border-orange-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-sm font-semibold text-slate-900 sm:text-base">
          <img src={logo} alt="Campus Issue Reporter" className="h-9 w-9 rounded-xl object-contain sm:h-10 sm:w-10" />
          <span className="leading-tight">Campus Issue Reporter</span>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-xl px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-red-50 to-orange-50 text-red-600'
                  : 'text-slate-700 hover:bg-orange-50 hover:text-red-600'
              }`
            }
          >
            Home
          </NavLink>
          <Button asChild className="h-10 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-4 text-white hover:from-red-600 hover:to-orange-600">
            <NavLink to="/report">Report Issue</NavLink>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-orange-200 bg-white text-slate-700 hover:bg-orange-50 md:hidden"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-orange-200 bg-white">
            <SheetHeader className="pb-0">
              <SheetTitle>Campus Issue Reporter</SheetTitle>
              <SheetDescription>Navigate quickly and report campus issues.</SheetDescription>
            </SheetHeader>
            <div className="space-y-2 p-4">
              <SheetClose asChild>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2 text-sm font-medium ${
                      isActive ? 'bg-orange-50 text-red-600' : 'text-slate-700 hover:bg-orange-50'
                    }`
                  }
                >
                  Home
                </NavLink>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="h-10 w-full rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600">
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

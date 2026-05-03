import React from 'react'
import { Bell, User } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 md:px-10 sticky top-0 z-20">
      <div />

      <div className="flex items-center gap-4">
        <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#be0032] rounded-full border-2 border-white" />
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2" />
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none">Aryan Kumar</p>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-[#be0032] border border-slate-200 shadow-sm">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
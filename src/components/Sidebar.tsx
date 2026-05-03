import React from 'react'
import { AlertCircle, CheckCircle2, LayoutDashboard, MoreVertical } from 'lucide-react'
import logo from '../assets/logo.png'

type SidebarProps = {
  activeTab: string
  onTabChange: (tab: string) => void
}

const navItems = ['Overview', 'My Reports', 'Resolved', 'Settings']

const iconMap: Record<string, React.ReactNode> = {
  Overview: <LayoutDashboard size={20} />,
  'My Reports': <AlertCircle size={20} />,
  Resolved: <CheckCircle2 size={20} />,
  Settings: <MoreVertical size={20} />,
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col sticky top-0 h-screen">
      <div className="p-8 flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="font-black text-slate-800 tracking-tight text-xl">Fix@RU</span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onTabChange(item)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === item
                ? 'bg-[#be0032]/5 text-[#be0032]'
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
            }`}
          >
            {iconMap[item]}
            {item}
          </button>
        ))}
      </nav>

      <div className="p-6">
        <div className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Help Center</p>
            <p className="text-sm font-medium mb-4">Having trouble reporting an issue?</p>
            <button className="text-xs font-bold bg-white text-black px-4 py-2 rounded-lg">Contact Admin</button>
          </div>
          <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#be0032]/20 rounded-full blur-2xl" />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

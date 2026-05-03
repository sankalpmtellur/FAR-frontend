import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, FileText, Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview')

  const stats = [
    { label: 'Total Reports', value: '24', icon: FileText, color: 'text-indigo-600' },
    { label: 'In Progress', value: '08', icon: AlertCircle, color: 'text-amber-500' },
    { label: 'Resolved', value: '16', icon: CheckCircle2, color: 'text-emerald-500' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-rose-100 selection:text-[#be0032]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Navbar />

        <section className="p-6 md:p-10 space-y-10 max-w-7xl mx-auto w-full overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Dashboard</h1>
              <p className="text-slate-500 font-medium">Here's what's happening on campus today.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-[#be0032] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-rose-200/50"
            >
              <Plus size={20} />
              Report New Issue
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={stat.label}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-xl bg-slate-50 inline-block mb-4 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                <p className="text-3xl font-black text-slate-900 leading-none">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-black text-xl text-slate-900 tracking-tight">Recent Reports</h3>
              <button className="text-[#be0032] font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                    <th className="px-8 py-4">Issue Details</th>
                    <th className="px-8 py-4">Location</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      id: '#4201',
                      title: 'Water Leakage',
                      loc: 'Newton House, 2nd Floor',
                      status: 'In Progress',
                      date: 'Oct 24, 2023',
                      color: 'bg-amber-500',
                    },
                    {
                      id: '#4198',
                      title: 'Broken AC Unit',
                      loc: 'Academic Block B, Room 102',
                      status: 'Resolved',
                      date: 'Oct 23, 2023',
                      color: 'bg-emerald-500',
                    },
                    {
                      id: '#4195',
                      title: 'Wi-Fi Outage',
                      loc: 'Central Library',
                      status: 'In Progress',
                      date: 'Oct 22, 2023',
                      color: 'bg-amber-500',
                    },
                  ].map((item) => (
                    <tr key={item.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs font-medium text-slate-400">{item.id}</p>
                      </td>
                      <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.loc}</td>
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                          <span className="text-xs font-bold text-slate-700">{item.status}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right text-xs font-bold text-slate-400">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard

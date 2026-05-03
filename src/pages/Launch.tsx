import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Launch: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-rose-100">

      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-rose-200/40 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-100/50 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <nav className="absolute top-0 w-full px-4 sm:px-8 py-6 md:py-8 flex justify-between items-center max-w-7xl mx-auto z-20">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="p-1.5 md:p-2 bg-white rounded-xl shadow-sm border border-slate-100">
            <img src={logo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
          </div>
          <span className="font-bold text-slate-800 tracking-tight text-sm md:text-base">
            Rishihood University
          </span>
        </div>
        <Link to="/signup">
          <button className="text-slate-600 hover:text-[#be0032] font-semibold text-xs md:text-sm transition-colors px-3 py-2">
            Sign up
          </button>
        </Link>
      </nav>

      <main className="relative z-10 flex flex-col items-center px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-slate-900 leading-[1.1] mb-8 md:mb-10 tracking-tight">
            Campus <br className="hidden sm:block" />
            <span className="text-[#be0032]">Issues</span>
          </h1>

          <div className="flex flex-col items-center justify-center">
            <Link to="/login" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 md:px-12 py-4 bg-[#be0032] text-white rounded-2xl font-bold text-lg shadow-xl shadow-rose-200/50 flex items-center justify-center gap-3 group transition-all"
              >
                Login to Report
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>

      <footer className="absolute bottom-6 w-full text-center px-4 sm:hidden">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          University Maintenance Portal
        </p>
      </footer>
    </div>
  );
};

export default Launch;
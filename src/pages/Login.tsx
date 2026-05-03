import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-rose-100">

            <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-rose-200/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-100/40 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md px-6"
            >
                <div className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white/50">

                    <div className="flex flex-col items-center mb-10">
                        <Link to="/">
                            <motion.img
                                whileHover={{ rotate: -5 }}
                                src={logo}
                                alt="Logo"
                                className="w-12 h-12 mb-4"
                            />
                        </Link>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
                        <p className="text-slate-500 font-medium text-sm mt-1">Login to your campus account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Username or Email</label>
                            <div className="relative group border border-slate-100 rounded-2xl focus-within:border-[#be0032] transition-colors">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#be0032] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="name@rishihood.edu.in"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#be0032]/20 focus:border-[#be0032] transition-all text-slate-800 placeholder:text-slate-300 font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-600 uppercase tracking-wide ml-1">Password</label>
                            <div className="relative group border border-slate-100 rounded-2xl focus-within:border-[#be0032] transition-colors">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#be0032] transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#be0032]/20 focus:border-[#be0032] transition-all text-slate-800 placeholder:text-slate-300 font-medium"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#be0032] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-rose-200/50 flex items-center justify-center gap-2 mt-4 hover:bg-[#a0002a] transition-all group"
                        >
                            Login
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </motion.button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm font-medium">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-[#be0032] font-bold hover:underline underline-offset-4">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>

            <p className="absolute bottom-8 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] z-10 px-6 text-center">
                Secure Access • Rishihood University Maintenance
            </p>
        </div>
    );
};

export default Login;
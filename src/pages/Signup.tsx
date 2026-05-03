import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Signup: React.FC = () => {
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-rose-100 py-12">

            <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-rose-200/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-indigo-100/40 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-lg px-6"
            >
                <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white/50">

                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight text-center">Signup</h2>
                        <p className="text-slate-500 font-medium text-sm mt-1">Create an account to start reporting</p>
                    </div>

                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">University Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#be0032] transition-colors" size={18} />
                                    <input
                                        type="email"
                                        placeholder="name@rishihood.edu.in"
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#be0032]/10 focus:border-[#be0032] outline-none transition-all font-medium"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Create Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#be0032] transition-colors" size={18} />
                                    <input
                                        type={showCreatePassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#be0032]/10 focus:border-[#be0032] outline-none transition-all font-medium"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCreatePassword(!showCreatePassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showCreatePassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1.5 md:col-span-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Confirm Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#be0032] transition-colors" size={18} />
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#be0032]/10 focus:border-[#be0032] outline-none transition-all font-medium"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-[#be0032] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-rose-200/50 flex items-center justify-center gap-2 group transition-all"
                            >
                                Create Account
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </motion.button>
                        </div>
                    </form>

                    <div className="relative flex items-center py-6">
                        <div className="flex-grow border-t border-slate-100"></div>
                        <span className="flex-shrink mx-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">Or</span>
                        <div className="flex-grow border-t border-slate-100"></div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.01, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 shadow-sm hover:shadow-md transition-all active:bg-slate-50"
                    >
                        <FcGoogle size={22} />
                        <span className="text-sm">Continue with Google</span>
                    </motion.button>

                    <p className="mt-8 text-center text-slate-500 text-sm font-medium">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#be0032] font-bold hover:underline underline-offset-4">
                            Sign in
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import "@fontsource-variable/geist";
import Launch from './pages/Launch';
import Login from './pages/Login';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Launch />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <div className="antialiased selection:bg-rose-100 selection:text-[#be0032]">
                <AnimatedRoutes />
            </div>
        </Router>
    );
}

export default App;
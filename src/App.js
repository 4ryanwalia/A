import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecapPage from './RecapPage';
import TryAgainPage from './TryAgainPage'; // ✅ Import TryAgainPage
import YesPage from './YesPage';
import ListenPage from './ListenPage';
import MemoriesPage from './MemoriesPage';

function ChatPage() {
    const handleRecapClick = () => {
        window.open("/recap", "_blank");
    };

    React.useEffect(() => {
        document.title = "Can";
    }, []);

    return (
        <div className="container">
            <div className="messages-container">
                <div className="top-bar">
                    <div className="network-signal">
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                        <div className="bar bar-4"></div>
                    </div>
                    <span className="time">2:52AM</span>
                    <div className="battery"></div>
                </div>

                <motion.div className="message left" initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 0 }}>
                    hii u look cute
                </motion.div>

                <motion.div className="message right" initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 2 }}>
                    thanks :) cant compete with your eyes tho.
                </motion.div>

                <motion.div className="message left" initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 4 }}>
                    i thought only i was watching you this whole time
                </motion.div>

                <motion.div className="message right" initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, delay: 6 }}>
                    ...
                </motion.div>

                <button className='recap-button' onClick={handleRecapClick}>
                    <span className="heart-icon">💖</span> no control <span className="heart-icon">💖</span>
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatPage />} />
                <Route path="/recap" element={<RecapPage />} />
                <Route path="/try-again" element={<TryAgainPage />} /> {/* ✅ Now this will work */}
                <Route path="/yes" element={<YesPage />} />
                <Route path="/listen" element={<ListenPage />} />
                <Route path="/memories" element={<MemoriesPage />} />
            </Routes>
        </Router>
    );
}

export default App;

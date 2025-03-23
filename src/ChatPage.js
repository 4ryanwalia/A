import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion
import "./App.css";

function ChatPage() {
    useEffect(() => {
        document.title = "Can";
    }, []);

    const handleRecapClick = () => {
        window.open(window.location.origin + "/recap", "_blank");
    };

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

                <motion.div className="message left" initial={{ x: '-100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
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
                    <span className="heart-icon">💖</span> dabavo <span className="heart-icon">💖</span>
                </button>
            </div>
        </div>
    );
}

export default ChatPage;

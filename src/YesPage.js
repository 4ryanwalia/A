import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./YesPage.css";

function YesPage() {
  useEffect(() => {
    document.title = "Wait... You Pressed Yes?";
  }, []);

  const [audio] = useState(new Audio("/hey.mp3"));

  useEffect(() => {
    audio.loop = true;

    // Try autoplaying
    const tryAutoplay = () => {
      audio.play().catch(() => {
        console.warn("Autoplay blocked, waiting for user interaction.");
      });
    };

    tryAutoplay();

    // Resume audio on click if blocked
    const enableAudio = () => {
      audio.play();
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    // **Pause music when the user leaves the tab**
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        audio.play().catch(() => console.warn("Autoplay blocked again."));
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [audio]);

  return (
    <div className="yes-container">
      {/* Animated background effect */}
      <div className="animated-bg"></div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="yes-heading"
      >
        Ohh... You pressed "Yes"?
      </motion.h1>

      {/* Dramatic Build-up */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="yes-text"
      >
        Idk what to even write here...  
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 2 }}
        className="yes-text"
      >
        Call me if it’s an actual yes... <span className="emoji"> 😶💭 </span>
      </motion.p>

      {/* Final dramatic floating effect */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 3 }}
        className="yes-footer"
      >
        (If you don’t, I’ll just assume you were messing with me. 👀)
      </motion.p>
    </div>
  );
}

export default YesPage;

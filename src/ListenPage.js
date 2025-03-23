import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Listen.css";

function Listen() {
  useEffect(() => {
    document.title = "Oh, You Sure?";
  }, []);

  const [audio] = useState(new Audio("/happy-ever.mp3"));

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

  const trackClick = () => {
    navigator.sendBeacon("https://cutt.ly/cro81GPB"); // ✅ Tracks instantly
    window.open("https://cutt.ly/cro81GPB", "_blank"); // ✅ Opens instantly
  };

  return (
    <div className="listen-container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="listen-heading"
      >
        Oh, you sure? You’ll miss a lot...
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="listen-text"
      >
        A half-mentally person like me and Shadow.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={trackClick}
        className="listen-button"
      >
        Yes, it’s a no
      </motion.button>
    </div>
  );
}

export default Listen;

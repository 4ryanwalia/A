import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MemoriesPage.css";

function MemoriesPage() {
  const [audio] = useState(new Audio("strangers-yet.mp3")); 
  const raindrops = Array.from({ length: 20 }); // Number of drops

  useEffect(() => {
    document.title = "Memories";
    audio.loop = true;

    const tryAutoplay = () => {
      audio.play().catch(() => {
        console.warn("Autoplay blocked. Waiting for user interaction.");
      });
    };
    tryAutoplay();

    const enableAudio = () => {
      audio.play();
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

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
    <div className="memories-container">
      {/* Animated Rain Effect */}
      <div className="animated-rain">
        {raindrops.map((_, index) => (
          <img
            key={index}
            src="raindrop.png"
            className="raindrop"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              animationDuration: `${2 + Math.random() * 3}s`, // Random speed
              animationDelay: `${Math.random() * 3}s`, // Random delay
            }}
            alt="Raindrop"
          />
        ))}
      </div>

      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "easeOut" }} className="memories-heading">
        Thanks for everything.
      </motion.h1>

      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }} className="memories-subheading">
        I will try to understand.
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3, delay: 1, ease: "easeOut" }} className="memories-message">
        Not like I haven't tried, but okay...
      </motion.p>

      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 3.5, delay: 1.5, ease: "easeOut" }} className="memories-final-message">
        Thanks for everything, A.
      </motion.p>
      <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="listen-text"
            >
              click the link below one last time
              
            </motion.p>

      {/* Spotify Playlist Link */}
      <motion.a
        href="https://cutt.ly/Hro8Ecis"
        target="_blank"
        rel="noopener noreferrer"
        className="spotify-link"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        🎵 Click on me to listen to all the songs we shared with each other
      </motion.a>
    </div>
  );
}

export default MemoriesPage;

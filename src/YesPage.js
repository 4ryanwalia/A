import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./YesPage.css";

function YesPage() {
  useEffect(() => {
    document.title = "Wait... You Pressed Yes?";
  }, []);

  const [audio] = useState(new Audio("hey.mp3"));

  useEffect(() => {
    audio.loop = true;

    const tryAutoplay = () => {
      audio.play().catch(() => {
        console.warn("Autoplay blocked, waiting for user interaction.");
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
    <div className="yes-container">
      {/* Falling Images Effect */}
      {[...Array(10)].map((_, i) => {
        const randomX = Math.random() * 100 + "vw"; // Random X position (0 to 100vw)
        const randomDuration = Math.random() * 5 + 3 + "s"; // Random fall speed (3s - 8s)
        const randomImage = i % 2 === 0 ? "002.png" : "009.png"; // Alternate between the two images

        return (
          <motion.img
            key={i}
            src={randomImage}
            className="falling-image"
            style={{
              "--random-x": randomX,
              "--random-duration": randomDuration,
            }}
          />
        );
      })}

      {/* Manually Added Falling Images */}
      <motion.img src="002.png" className="falling-image" style={{ "--random-x": "20vw", "--random-duration": "5s" }} />
      <motion.img src="009.png" className="falling-image" style={{ "--random-x": "65vw", "--random-duration": "7.5s" }} />

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
        Text me? if it’s an actual yes... <span className="emoji"> 😶💭 </span>
      </motion.p>

      {/* Final dramatic floating effect */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 3 }}
        className="yes-footer"
      >
        (If you don’t, I’ll just assume you were messing with me. :( 👀)
      </motion.p>
    </div>
  );
}

export default YesPage;

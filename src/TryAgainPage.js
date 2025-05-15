import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./TryAgainPage.css";

function TryAgainPage() {
  const navigate = useNavigate();
  const [audio] = useState(new Audio("book-of-you-and-i.mp3")); // ✅ Update with correct path

  useEffect(() => {
    document.title = "Try Again?";
    audio.loop = true;

    // **Try autoplay**
    const tryAutoplay = () => {
      audio.play().catch(() => {
        console.warn("Autoplay blocked. Waiting for user interaction.");
      });
    };

    tryAutoplay();

    // **Enable audio on user interaction if blocked**
    const enableAudio = () => {
      audio.play();
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    // **Pause when user switches tab/app**
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
    <div className="try-again-container">
 <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="try-again-heading"
>
  Would it have ended the same way if we had met now?  
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.5 }}
  className="try-again-subtext"
>
  Would you like to give this all a second chance?  
</motion.p>

<motion.p
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, delay: 1 }}
  className="try-again-subtext"
>
  Click on one of these..  
</motion.p>
<motion.p
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, delay: 1 }}
  className="try-again-subtext"
>
</motion.p>

      <div className="options-container">
        {/* YES Box */}
        <motion.div
          className="option-box yes"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/yes")}
        >
          <p>Yes</p>
        </motion.div>

        {/* NO - LISTEN ARYAN Box */}
        <motion.div
          className="option-box listen"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/listen")}
        >
          <p>No, Aryan</p>
        </motion.div>

        {/* LET IT BE THE WAY Box */}
        <motion.div
          className="option-box memories"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/memories")}
        >
          <p>Let it be the way it is</p>
        </motion.div>
      </div>
    </div>
  );
}

export default TryAgainPage;

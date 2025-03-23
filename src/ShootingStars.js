// ShootingStars.js (Background Shooting Stars)
import React, { useEffect, useRef } from "react";

const ShootingStars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) {
      console.error("Container is null!");
      return;
    }

    const createStar = () => {
      const star = document.createElement("div");
      star.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: white;
        border-radius: 50%;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        opacity: 0.9;
        z-index: 1; /* Stay in the background */
        pointer-events: none;
      `;

      container.appendChild(star);

      // Shooting effect
      setTimeout(() => {
        star.style.transition = "transform 2s linear, opacity 2s linear";
        star.style.transform = `translate(${Math.random() * 100 - 250}vw, ${
          Math.random() * 100 - 250
        }vh) scale(1.5)`;
        star.style.opacity = "0";
      }, 50);

      // Remove after animation
      setTimeout(() => {
        container.removeChild(star);
      }, 20000);
    };

    // Generate stars every second
    const interval = setInterval(createStar, 5);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={starsRef}
      style={{
        position: "fixed", // ✅ Background Effect
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // ✅ Behind all content
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    />
  );
};

export default ShootingStars;

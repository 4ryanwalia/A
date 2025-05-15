import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import "./RecapPage.css";
import ShootingStars from "./ShootingStars";

function RecapPage() {
  const [showButton, setShowButton] = useState(false);
  const [audio] = useState(() => new Audio("dandelions.mp3")); // ✅ Prevent unnecessary re-creation of audio
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    document.title = "We";
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

    // ✅ Show button after 10 seconds
    const timer = setTimeout(() => setShowButton(true), 10000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timer);
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [audio]);

  const handleTryAgainClick = () => {
    navigate("/try-again");
  };
  return (
    <div className="recap-container">
      <ShootingStars />
      <div className="recap-content">
<<<<<<< HEAD
       <h1>A Moment Remembered</h1>
<p className="recap-date">April 23rd - 10:51 AM</p>
<p className="recap-memory">
  When I saw you in real life, you were out of this world in that white top and specs... I never told you, but I couldn't take my eyes off you for a full two minutes before I finally texted you that I was there.
</p>
<p className="recap-memory">
  I remember you texted me "ily" that day. You might regret those words, but my only regret is not saying them first.
  <br />
  Okay, I know, I know, it's going to sound so cringe, but maybe this will be the last time, so...
</p>


        <p className="recap-feeling">You're in my head more than I w...</p>
        <p className="recap-feeling">clickk the button</p>
      
=======
        <h1>A Moment Remembered</h1>
        <p className="recap-date">April 23rd - 10:51 AM</p>
        <p className="recap-memory">
          When I saw you in real life, and you were out of this world in that white top and specs...
          I never told you, but I couldn't take my eyes off you for a full two minutes before I finally texted you I was there.
        </p>
        <p className="recap-memory">
          I remember you texted me "ily" that day. You might regret those words, but my only regret is not saying them first.
        </p>
        <p className="recap-memory">I miss missing you.</p>
        <p className="recap-feeling">You're in my head more than I w..</p>
>>>>>>> 9b3b466692d3fa61708526607afd0fea445ec46e

        {/* ✅ Show button after 10 seconds */}
        {showButton && (
          <button className="try-again-button" onClick={handleTryAgainClick}>
            Let's see the options you got
          </button>
        )}
      </div>
    </div>
  );
}

export default RecapPage;

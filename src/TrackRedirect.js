import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TrackRedirect() {
  useEffect(() => {
    // ✅ Log the event (store in database, local file, or just console log)
    console.log("Ashmi clicked the playlist link");

    // ✅ Redirect to Spotify after logging
    window.location.href = "https://cutt.ly/Hro8Ecis";
  }, []);

  return <p>Redirecting to Spotify...</p>;
}

export default TrackRedirect;

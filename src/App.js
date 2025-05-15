import React from "react";  // Corrected import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./ChatPage";
import RecapPage from "./RecapPage";
import TryAgainPage from "./TryAgainPage";
import YesPage from "./YesPage";
import ListenPage from "./ListenPage";
import MemoriesPage from "./MemoriesPage";

function App() {
    return (
    <Router basename="/Ashmi">
        <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/recap" element={<RecapPage />} />
        <Route path="/try-again" element={<TryAgainPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/listen" element={<ListenPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        </Routes>
    </Router>
    
    );
}

export default App;

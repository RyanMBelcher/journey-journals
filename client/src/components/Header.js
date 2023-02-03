import React, { useState, useContext } from "react";
// pages that will contain information
import Landing from "./pages/Landing";
import TravelFeed from "./pages/TravelFeed";
import ProfilePage from "./pages/ProfilePage";
// link to navbar
import Navbar from "./Navbar";
import { DarkModeContext } from '../context/DarkModeContext';

export default function Header() {
    const { toggleDarkMode } = useContext(DarkModeContext)
    
    const [currentPage, setPage] = useState("Landing");

    const renderPage = () => {
        if (currentPage === "Landing") {
            return <Landing />;
        }
        if (currentPage === "TravelFeed") {
            return <TravelFeed />;
        }
        if (currentPage === "ProfilePage") {
            return <ProfilePage />;
        }
    };

    const handlePageChange = (page) => setPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* {renderPage()} */}
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    );
}
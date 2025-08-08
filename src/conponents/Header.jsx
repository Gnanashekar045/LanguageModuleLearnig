import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Languages, Home, Phone, MoreHorizontal } from "lucide-react";

const languages = ["English", "Hindi", "Telugu", "Tamil", "Kannada"];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname.split("/")[1] || "";

  function onChange(e) {
    const chosen = e.target.value;
    if (!chosen) return;
    navigate(`/${chosen.toLowerCase()}`);
  }

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-6 py-4 shadow-lg font-pop">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO with gradient ring and fade animation */}
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/40 animate-spin-slow">
            <span className="text-white font-bold text-lg drop-shadow">L</span>
          </div>
          <div className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
            Lingua<span className="text-pink-300">Pro</span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
  <Link to="/" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    <Home size={18} /> Home
  </Link>
  <Link to="/courses" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    📘 Courses
  </Link>
  <a href="#about" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    ℹ️ About
  </a>
  <a href="#contact" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    <Phone size={18} /> Contact
  </a>
  <a href="#blog" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    📰 Blog
  </a>
  <Link to="/login" className="hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm">
    🔐 Login
  </Link>
</nav>


        {/* Language dropdown */}
        <div className="flex items-center gap-2 drop-shadow-sm">
          <Languages size={18} />
          <select
            value={current.toLowerCase()}
            onChange={onChange}
            className="text-black px-2 py-1 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select</option>
            {languages.map((l) => (
              <option key={l} value={l.toLowerCase()}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}

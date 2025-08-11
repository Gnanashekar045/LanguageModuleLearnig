import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Languages, Home, Phone } from "lucide-react";

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
    <header className="bg-gradient-to-r from-purple-700/80 via-pink-600/80 to-indigo-700/80 backdrop-blur-lg border-b border-white/20 shadow-lg px-6 py-4 font-pop animate-fade-in">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO with glowing gradient ring */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/40 animate-spin-slow hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-lg drop-shadow">L</span>
          </div>
          <div className="text-2xl font-bold tracking-wide text-white drop-shadow-md">
            Lingua<span className="text-pink-300">Pro</span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          {[
            { to: "/", label: <><Home size={18}/> Home</> },
            { to: "/courses", label: <>📘 Courses</> },
            { href: "#about", label: <>ℹ️ About</> },
            { href: "#contact", label: <><Phone size={18}/> Contact</> },
            { href: "#blog", label: <>📰 Blog</> },
            { to: "/login", label: <>🔐 Login</> },
          ].map((link, idx) =>
            link.to ? (
              <Link
                key={idx}
                to={link.to}
                className="relative hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={idx}
                href={link.href}
                className="relative hover:text-yellow-300 transition flex items-center gap-1 drop-shadow-sm group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            )
          )}
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

/* Tailwind Custom Animations (add in your global CSS or tailwind config) */
/*
@keyframes gradient-slow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-slow {
  background-size: 200% 200%;
  animation: gradient-slow 15s ease infinite;
}
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
}
*/

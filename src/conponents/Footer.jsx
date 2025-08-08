import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-6 py-6 mt-12 font-pop">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">LinguaPro</span>. All rights reserved.
        </div>

        {/* Center: Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#privacy" className="hover:text-yellow-300 transition">Privacy</a>
          <a href="#terms" className="hover:text-yellow-300 transition">Terms</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <Instagram size={20} />
          </a>
          <a href="mailto:support@linguapro.com" className="hover:text-green-300 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

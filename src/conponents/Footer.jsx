import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/20 text-white font-pop mt-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <div className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-3">
            Lingua<span className="text-pink-400">Pro</span>
          </div>
          <p className="text-sm text-gray-200 leading-relaxed">
            Learn languages with interactive lessons, real-life examples, and engaging quizzes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-pink-300">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#courses" className="hover:text-yellow-300 transition">Courses</a></li>
            <li><a href="#blog" className="hover:text-yellow-300 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-pink-300">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#privacy" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
            <li><a href="#refund" className="hover:text-yellow-300 transition">Refund Policy</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-pink-300">Get in Touch</h4>
          <p className="text-sm text-gray-200">support@linguapro.com</p>
          <div className="flex gap-4 mt-4">
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
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 border-t border-white/20 text-center text-xs text-gray-300 py-3">
        © {new Date().getFullYear()} LinguaPro. All rights reserved.
      </div>
    </footer>
  );
}

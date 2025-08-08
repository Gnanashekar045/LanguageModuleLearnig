import React from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Home from "./pages/Home";
import LanguageLayout from "./pages/LanguageLayout";
import BasicGrammar from "./pages/topics/BasicGrammar";
import PastTense from "./pages/topics/PastTense";
import PresentTense from "./pages/topics/PresentTense";
import FutureTense from "./pages/topics/FutureTense";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* dynamic language route with nested topic routes */}
          <Route path="/:lang/*" element={<LanguageLayout />}>
            <Route index element={<Navigate to="basic-grammar" replace />} />
            <Route path="basic-grammar" element={<BasicGrammar />} />
            <Route path="present-tense" element={<PresentTense />} />
            <Route path="past-tense" element={<PastTense />} />
            <Route path="future-tense" element={<FutureTense />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

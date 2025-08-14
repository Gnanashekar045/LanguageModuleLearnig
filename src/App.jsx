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
import FutureTense from "./pages/topics/FutureSimple";
import PresentContinuous from "./pages/topics/PresentContinuous";
import PresentPerfect from "./pages/topics/PresentPerfect";
import PresentPerfectContinuous from "./pages/topics/PresentPerfectContinuous";
import PastContinuous from "./pages/topics/PastContinuous";
import PastPerfect from "./pages/topics/PastPerfect";
import PastPerfectContinuous from "./pages/topics/PastPerfectContinuous";
import FutureContinuous from "./pages/topics/FutureContinuous";
import FuturePerfect from "./pages/topics/FuturePerfect";
import FuturePerfectContinuous from "./pages/topics/FuturePerfectContinuous";




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
            <Route path="PresentContinuous-tense" element={<PresentContinuous />} />
            <Route path="PresentPerfect-tense" element={<PresentPerfect/>} />
            <Route path="PresentPerfectContinuous-tense" element={<PresentPerfectContinuous/>} />
            <Route path="past-tense" element={<PastTense />} />
            <Route path="past-continuous" element={<PastContinuous />} />
            <Route path="past-perfect" element={<PastPerfect />} />
            <Route path="past-perfect-Continue" element={<PastPerfectContinuous />} />
            <Route path="future-tense" element={<FutureTense />} />
            <Route path="future-contionuous" element={<FutureContinuous />} />
            <Route path="future-Perfect" element={<FuturePerfect />} />
            <Route path="future-Perfect-continuous" element={<FuturePerfectContinuous />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

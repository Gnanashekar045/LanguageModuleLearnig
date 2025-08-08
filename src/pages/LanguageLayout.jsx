import React from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import Sidebar from "../conponents/Sidebar";

const allowed = ["english", "hindi", "telugu", "tamil", "kannada"];

export default function LanguageLayout() {
  const { lang } = useParams();
  const current = (lang || "").toLowerCase();

  if (!allowed.includes(current)) {
    // if somebody navigates to /something-else, redirect to english
    return <Navigate to="/english" replace />;
  }

  return (
    <div className="flex">
      <Sidebar lang={current} />
      <section className="flex-1 p-6 bg-white min-h-screen">
        <h2 className="text-2xl font-semibold mb-4 capitalize">{current}</h2>
        {/* nested routes render here */}
        <Outlet />
      </section>
    </div>
  );
}

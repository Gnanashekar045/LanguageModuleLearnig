import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { label: "Basic Grammar", slug: "basic-grammar" },
  { label: "Present Tense", slug: "present-tense" },
  { label: "Present Continuous", slug: "PresentContinuous-tense" },
  { label: "Past Tense", slug: "past-tense" },
  { label: "Future Tense", slug: "future-tense" },
];

export default function Sidebar({ lang }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r min-h-screen">
      <ul className="space-y-2">
        {topics.map((t) => (
          <li key={t.slug}>
            <Link
              to={`/${lang}/${t.slug}`}
              className="block p-2 rounded hover:bg-blue-100 capitalize"
            >
              {t.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const topics = [
  { label: "Basic Grammar", slug: "basic-grammar" },
  { label: "Present Simple", slug: "present-tense" },
  { label: "Present Continuous", slug: "PresentContinuous-tense" },
  { label: "Present Perfect", slug: "PresentPerfect-tense" },
  { label: "Present Perfect Continueous", slug: "PresentPerfectContinuous-tense" },
  { label: "Past Simple", slug: "past-tense" },
  { label: "Past Contionueous", slug: "past-continuous" },
  { label: "Past Perfect", slug: "past-perfect" },
  { label: "Past Perfect Continuous", slug: "past-perfect-Continue" },
  { label: "Future Simple", slug: "future-tense" },
  { label: "Future Continueous", slug: "future-contionuous" },
  { label: "Future Perfect", slug: "future-Perfect" },
  { label: "Future Perfect Continous", slug: "future-Perfect-continuous" },
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

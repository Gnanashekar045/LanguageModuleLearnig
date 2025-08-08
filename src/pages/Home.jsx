import React from "react";
import { Link } from "react-router-dom";

const langs = ["english", "hindi", "telugu", "tamil", "kannada"];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome — Choose a language</h1>
      <div className="flex gap-3 flex-wrap">
        {langs.map((l) => (
          <Link
            to={`/${l}`}
            key={l}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 capitalize"
          >
            {l}
          </Link>
        ))}
      </div>

      <p className="mt-6 text-gray-600">
        Or use the language select in the header. After selecting a language, use the left sidebar to open topics.
      </p>
    </div>
  );
}

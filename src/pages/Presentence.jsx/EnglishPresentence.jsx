import { useState } from "react";
import { verbs } from "../data/verbs";

export default function EnglishPresentence() {
  const [search, setSearch] = useState("");

  const filteredVerbs = verbs.filter((item) =>
    item.verb.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Verb Conjugations
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a verb..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Scrollable Verb List */}
      <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">
        {filteredVerbs.length > 0 ? (
          filteredVerbs.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-3">
                {item.verb}
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                {item.forms.map((form, i) => (
                  <li key={i} className="bg-gray-50 p-2 rounded">
                    {form}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No verbs found.</p>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";

function ByChatgpt() {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;

  const matchCount = findText
    ? words.filter(
        (word) => word.toLowerCase() === findText.toLowerCase()
      ).length
    : 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Word Analyzer
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="text"
            placeholder="Word to find"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition">
            Analyze
          </button>
        </div>

        <div className="mt-6 space-y-1 text-sm text-gray-700">
          <p>
            Total words: <span className="font-semibold">{wordCount}</span>
          </p>

          {findText && (
            <p>
              “{findText}” found:{" "}
              <span className="font-semibold">{matchCount}</span> times
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ByChatgpt;

import { useState } from "react";
// keeping these imports in case you need them later, but unused for this UI

function ByGoogle() {
  const [mainText, setMainText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  // Function to calculate occurrences
  const handleCalculate = () => {
    if (!searchText) {
      setCount(0);
      return;
    }
    // Case insensitive search logic
    const regex = new RegExp(searchText, "gi");
    const matches = mainText.match(regex);
    setCount(matches ? matches.length : 0);
  };

  const handleClear = () => {
    setMainText("");
    setSearchText("");
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-white/20">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Text Analyzer</h1>
          <p className="text-gray-500 text-sm">Find and count specific words instantly</p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          
          {/* Main Text Area */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Original Text</label>
            <textarea
              className="w-full h-32 p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none shadow-inner"
              placeholder="Paste your paragraph here..."
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
            />
          </div>

          {/* Search Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Word to Find</label>
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-inner"
              placeholder="e.g. 'react'"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transform active:scale-95 transition-all duration-200"
            >
              Count Matches
            </button>
            
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-semibold hover:bg-gray-100 transition-all active:scale-95"
            >
              Clear
            </button>
          </div>

          {/* Result Display */}
          <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex items-center justify-between">
            <span className="text-gray-600 font-medium">Total Occurrences:</span>
            <span className="text-3xl font-bold text-indigo-600">{count}</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ByGoogle;
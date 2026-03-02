"use client";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("purple");
  const [reduceMotion, setReduceMotion] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [highQuality, setHighQuality] = useState(false);

  const accentColors: any = {
    red: "bg-red-400",
    yellow: "bg-yellow-400",
    green: "bg-green-400",
    purple: "bg-purple-500",
    pink: "bg-pink-400",
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-xl p-8 space-y-8">

        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Appearance</h2>
          <p className="text-sm text-gray-500">
            Set or customize your preferences for the system
          </p>
        </div>

        <div className="border-t" />

        {/* Language */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium text-gray-700">Language</h3>
            <p className="text-sm text-gray-500">
              Select the language of the platform
            </p>
          </div>

          <select className="border rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>

        <div className="border-t" />

        {/* Interface Theme */}
        <div>
          <h3 className="font-medium text-gray-700">Interface theme</h3>
          <p className="text-sm text-gray-500 mb-4">
            Customize your application appearance
          </p>

          <div className="flex gap-4">

            {["auto", "light", "dark"].map((item) => (
              <div
                key={item}
                onClick={() => setTheme(item)}
                className={`flex-1 cursor-pointer rounded-2xl border p-3 transition relative
                ${theme === item
                    ? "border-purple-500 shadow-md"
                    : "border-gray-200"
                  }`}
              >
                <div
                  className={`h-20 rounded-lg mb-3
                  ${item === "dark"
                      ? "bg-gradient-to-br from-purple-700 to-indigo-900"
                      : item === "light"
                        ? "bg-gray-100"
                        : "bg-gray-200"
                    }`}
                />

                <p
                  className={`text-sm font-medium text-center capitalize
                  ${theme === item ? "text-purple-600" : "text-gray-600"
                    }`}
                >
                  {item}
                </p>

                {theme === item && (
                  <div className="absolute bottom-10 left-3 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t" />

        {/* Accent Color */}
        <div>
          <h3 className="font-medium text-gray-700">Accent color</h3>
          <p className="text-sm text-gray-500 mb-4">
            Pick your platform's main color
          </p>

          <div className="flex gap-3">
            {Object.keys(accentColors).map((color) => (
              <div
                key={color}
                onClick={() => setAccent(color)}
                className={`w-6 h-6 rounded-full cursor-pointer ${accentColors[color]}
                ${accent === color ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
              />
            ))}
          </div>
        </div>

        <div className="border-t" />

        {/* Toggles */}
        <div className="space-y-5">
          <Toggle label="Reduce motion" state={reduceMotion} setState={setReduceMotion} />
          <Toggle label="Auto play" state={autoPlay} setState={setAutoPlay} />
          <Toggle label="High quality photo" state={highQuality} setState={setHighQuality} />
        </div>

        <div className="border-t" />

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button className="text-gray-400 text-sm hover:text-gray-600">
            Reset to default
          </button>

          <div className="flex gap-3">
            <button className="px-5 py-2 border rounded-xl text-gray-600 hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-6 py-2 rounded-xl text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md hover:opacity-90">
              Save Preferences
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

function Toggle({ label, state, setState }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-700">{label}</span>

      <div
        onClick={() => setState(!state)}
        className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition
        ${state ? "bg-purple-500" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition
          ${state ? "translate-x-5" : ""}`}
        />
      </div>
    </div>
  );
}
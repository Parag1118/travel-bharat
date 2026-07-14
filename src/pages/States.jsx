import { useState } from "react";
import states from "../data/statesData";
import StateCard from "../components/states/StateCard";

export default function States() {
  const [search, setSearch] = useState("");

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Explore Indian States
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-10 text-lg">
          Discover culture, food, history, wildlife and breathtaking destinations across India.
        </p>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="🔍 Search a state..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-4 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p className="text-center text-gray-500 mb-8">
          Showing <span className="font-bold">{filteredStates.length}</span> state(s)
        </p>

        {filteredStates.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-red-500">
              No states found 😔
            </h2>

            <p className="mt-4 text-gray-500">
              Try searching with another state name.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStates.map((state) => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
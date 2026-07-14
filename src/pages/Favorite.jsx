import states from "../data/statesData";
import StateCard from "../components/states/StateCard";

export default function Favorites() {
  const favoriteIds =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const favoriteStates = states.filter((state) =>
    favoriteIds.includes(state.id)
  );

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          ❤️ My Favorite States
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Your saved travel destinations.
        </p>

        {favoriteStates.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold">
              No Favorites Yet
            </h2>

            <p className="text-gray-500 mt-4">
              Click the ❤️ icon on any state to save it.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteStates.map((state) => (
              <StateCard key={state.id} state={state} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
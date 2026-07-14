import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function StateCard({ state }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorite(favorites.includes(state.id));
  }, [state.id]);

  const toggleFavorite = () => {
    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.includes(state.id)) {
      favorites = favorites.filter((id) => id !== state.id);
      setFavorite(false);
    } else {
      favorites.push(state.id);
      setFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 relative">

      <button
        onClick={toggleFavorite}
        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
      >
        {favorite ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-gray-500 text-xl" />
        )}
      </button>

      <img
        src={state.image}
        alt={state.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-2">
          {state.name}
        </h2>

        <p className="text-gray-500 mb-2">
          <strong>Capital:</strong> {state.capital}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {state.famous.map((place, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {place}
            </span>
          ))}
        </div>

        <Link
          to={`/states/${state.id}`}
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Explore →
        </Link>

      </div>

    </div>
  );
}
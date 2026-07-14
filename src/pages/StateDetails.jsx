import Weather from "../components/Weather";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import states from "../data/statesData";
import StateCard from "../components/states/StateCard";

export default function StateDetails() {
  const { id } = useParams();

  const state = states.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(null);
  const similarStates = states.filter((item) => item.id !== state.id).slice(0, 3);

  if (!state) {
    return (
      <div className="text-center mt-20 text-3xl">
        State Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">

      <img
        src={state.image}
        alt={state.name}
        className="w-full h-[450px] object-cover"
      />

      <div className="max-w-6xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-4">
          {state.name}
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          {state.about}
        </p>
        <Weather city={state.capital} />
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mt-8">
  <h2 className="text-2xl font-bold mb-4">
    📍 Location on Map
  </h2>

  <iframe
    title={state.name}
    width="100%"
    height="400"
    loading="lazy"
    className="rounded-xl"
    src={`https://maps.google.com/maps?q=${state.lat},${state.lng}&z=8&output=embed`}
  ></iframe>
</div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              📍 Famous Places
            </h2>

            <ul className="list-disc ml-5">
              {state.famous.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              🍛 Famous Food
            </h2>

            <p>{state.food}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              🐅 Wildlife
            </h2>

            <p>{state.wildlife}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              🎉 Festivals
            </h2>

            <p>{state.festivals}</p>
          </div>

        </div>
{/* Gallery */}
<div className="bg-white p-6 rounded-xl shadow mt-8">
  <h2 className="text-2xl font-bold mb-6">
    📸 Gallery
  </h2>

  <div className="mt-12">
  <h2 className="text-3xl font-bold mb-6">
    📸 Gallery
  </h2>

  <div className="grid md:grid-cols-3 gap-6">
    {state.gallery.map((image, index) => (
      <img
        key={index}
        src={image}
        alt=""
        onClick={() => setSelectedImage(image)}
        className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition duration-300 h-64 w-full object-cover"
      />
    ))}
  </div>
</div>
</div>

        <div className="bg-white p-6 rounded-xl shadow mt-8">
          <h2 className="text-2xl font-bold mb-4">
            📅 Best Time To Visit
          </h2>

          <p>{state.bestTimeToVisit}</p>
        </div>
<div className="mt-16">
  <h2 className="text-3xl font-bold mb-8 text-center">
    🌍 You May Also Like
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {similarStates.map((item) => (
      <StateCard key={item.id} state={item} />
    ))}
  </div>
</div>
        <Link
          to="/states"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          ← Back to States
        </Link>

      </div>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt=""
      className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
    />

    <button
      className="absolute top-6 right-8 text-white text-5xl"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>
  </div>
)}
    </div>
  );
}
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

import PopularDestinations from "../components/home/PopularDestinations";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <>

      {/* Why Travel Bharat */}
      <section className="relative h-screen overflow-hidden">

  <div
    className="absolute inset-0 bg-cover bg-center animate-[pulse_10s_ease-in-out_infinite] pointer-events-none"
    style={{ backgroundImage: `url(${hero})` }}
  ></div>

  <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

  <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">

    <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
      Explore Incredible India
    </h1>

    <p className="text-lg md:text-2xl max-w-3xl mb-8 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards]">
      Discover every state, culture, heritage, food,
      wildlife, festivals and hidden gems across India.
    </p>

    <Link
      to="/states"
      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105  transition-all duration-300 shadow-lg hover:shadow-2x1"
    >
      Explore Now
    </Link>

    <div className="absolute bottom-10 animate-bounce">
  <button
    onClick={() => {
      document
        .getElementById("popular-destinations")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }}
    className="text-4xl hover:scale-125 transition duration-300"
  >
    ⬇️
  </button>
</div>

  </div>

</section>

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Stats */}
      <Stats />
    </>
  );
}
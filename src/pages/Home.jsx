import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

import PopularDestinations from "../components/home/PopularDestinations";
import Stats from "../components/home/Stats";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="w-full h-full bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore Incredible India
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mb-8">
            Discover every state, culture, heritage, food, wildlife,
            festivals and hidden gems across India.
          </p>

          <Link
            to="/states"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Why Travel Bharat */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Travel Bharat?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">🏛 Heritage</h3>
              <p>
                Explore India's ancient forts, temples and UNESCO World
                Heritage Sites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">🌿 Nature</h3>
              <p>
                Experience mountains, beaches, forests, rivers and breathtaking
                landscapes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">🎉 Culture</h3>
              <p>
                Discover festivals, traditions, food and local experiences
                from every state.
              </p>
            </div>
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
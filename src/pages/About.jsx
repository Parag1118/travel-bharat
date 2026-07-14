import { FaGlobeAsia, FaMountain, FaUsers, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            About Travel Bharat
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Travel Bharat is a modern travel platform designed to help people
            discover India's incredible culture, heritage, wildlife, festivals,
            food, and breathtaking tourist destinations.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <FaGlobeAsia className="text-5xl text-blue-600 mb-4" />

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Our mission is to inspire travelers by providing accurate,
              beautiful and engaging information about every Indian state,
              helping people explore the country's rich diversity.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <FaMountain className="text-5xl text-green-600 mb-4" />

            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              We aim to become India's most trusted travel guide platform,
              connecting people with the country's history, nature, heritage,
              and unforgettable experiences.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Travel Bharat?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-2xl p-8 text-center">
              <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />

              <h3 className="text-2xl font-semibold mb-3">
                Easy to Explore
              </h3>

              <p className="text-gray-600">
                Find information about every state in a simple and beautiful
                interface.
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-8 text-center">
              <FaHeart className="text-5xl text-red-500 mx-auto mb-4" />

              <h3 className="text-2xl font-semibold mb-3">
                Rich Information
              </h3>

              <p className="text-gray-600">
                Learn about famous places, food, wildlife, festivals and much
                more.
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-8 text-center">
              <FaGlobeAsia className="text-5xl text-blue-600 mx-auto mb-4" />

              <h3 className="text-2xl font-semibold mb-3">
                Incredible India
              </h3>

              <p className="text-gray-600">
                Experience the beauty and diversity of India from one platform.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
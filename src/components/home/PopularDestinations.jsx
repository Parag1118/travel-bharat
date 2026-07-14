import { Link } from "react-router-dom"
import { motion } from "framer-motion";

import rajasthan from "../../assets/images/rajasthan.jpg";
import goa from "../../assets/images/goa.jpg";
import kerala from "../../assets/images/kerala.jpg";
import ladakh from "../../assets/images/ladakh.jpg";

const destinations = [
  {
    id: 1,
    name: "Rajasthan",
    image: rajasthan,
    description: "Land of Kings, forts and royal palaces.",
  },
  {
    id: 2,
    name: "Goa",
    image: goa,
    description: "Beautiful beaches and vibrant nightlife.",
  },
  {
    id: 3,
    name: "Kerala",
    image: kerala,
    description: "Backwaters, greenery and Ayurveda.",
  },
  {
    name: "Ladakh",
    image: ladakh,
    description: "Snowy mountains and breathtaking valleys.",
  },
];

export default function PopularDestinations() {
  return (
    <section id="popular-destinations"
    className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Popular Destinations
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore India's most loved travel destinations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {destinations.map((place, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >

              <img
                src={place.image}
                alt={place.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {place.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {place.description}
                </p>

                <Link
  to={`/states/${place.id}`}
  className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
  Explore →
</Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
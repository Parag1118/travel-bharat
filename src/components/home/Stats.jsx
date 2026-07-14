import { FaMapMarkedAlt, FaLandmark, FaUsers, FaCamera } from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-blue-600" />,
      number: "28+",
      title: "States",
    },
    {
      icon: <FaLandmark className="text-4xl text-green-600" />,
      number: "1000+",
      title: "Tourist Places",
    },
    {
      icon: <FaUsers className="text-4xl text-orange-500" />,
      number: "10M+",
      title: "Visitors",
    },
    {
      icon: <FaCamera className="text-4xl text-pink-500" />,
      number: "5000+",
      title: "Travel Photos",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          India at a Glance
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Discover the diversity and beauty of Incredible India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
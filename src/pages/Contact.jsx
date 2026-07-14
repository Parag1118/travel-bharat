import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-xl">
            We'd love to hear from you. Get in touch with Travel Bharat.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}
          <div>

            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">

              <h2 className="text-3xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-2xl text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>support@travelbharat.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhone className="text-2xl text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaClock className="text-2xl text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Working Hours</h3>
                    <p>Monday - Saturday</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Google Map */}
            <div className="bg-white p-4 rounded-2xl shadow-lg">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
                className="w-full h-80 rounded-xl"
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
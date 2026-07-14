import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6">

      <div className="text-center">

        <FaExclamationTriangle className="text-yellow-500 text-7xl mx-auto mb-6" />

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4 dark:text-white">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
        >
          🏠 Back to Home
        </Link>

      </div>

    </section>
  );
}
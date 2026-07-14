import { Link, NavLink } from "react-router-dom";
import { FaPlaneDeparture, FaHeart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <FaPlaneDeparture className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-700 dark:text-white">
            Travel Bharat
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "hover:text-gray-800 dark:text-white hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/states"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "hover:text-gray-800 dark:text-white hover:text-blue-500"
            }
          >
            Explore
          </NavLink>
          <NavLink
  to="/trip-planner"
  className={({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "hover:text-blue-600 dark:text-white"
  }
>
  Trip Planner
</NavLink>



          <NavLink
  to="/favorite"
  className={({ isActive }) =>
    `flex items-center gap-2 ${
      isActive
        ? "text-red-500 font-bold"
        : "text-gray-700 dark:text-white hover:text-red-500"
    }`
  }
>
  <FaHeart className="text-red-500" />
  <span>Favorites</span>
</NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold"
                       : "text-gray-800 dark:text-white hover:text-blue-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ?  "text-blue-500 font-bold"
                       : "text-gray-800 dark:text-white hover:text-blue-500"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="text-2xl text-gray-800 dark:text-yellow-400"
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>

  <button
    className="md:hidden"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <HiMenu size={30} />
  </button>

</div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4">

          <NavLink to="/">Home</NavLink>
          <NavLink to="/states">Explore</NavLink>
          <NavLink to="/favorites">❤️ Favorites</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/trip-planner">Trip Planner</NavLink>

        </div>
      )}

    </nav>
  );
}
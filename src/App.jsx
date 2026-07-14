import TripPlanner from "./pages/TripPlanner";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/layout/Footer";
import Favorite from "./pages/Favorite";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
        <Route path="/states/:id" element={<StateDetails />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
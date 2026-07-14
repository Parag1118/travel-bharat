import states from "../data/statesData";
import { useState } from "react";

export default function TripPlanner() {
  const [state, setState] = useState("");
  const [days, setDays] = useState("");
  const [travelers, setTravelers] = useState("");
  const [hotel, setHotel] = useState("Budget");
  const [transport, setTransport] = useState("Bus");
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    let hotelCost = 1000;
    if (!state || !days || !travelers) {
  alert("Please fill all fields.");
  return;
}
    if (hotel === "Standard") hotelCost = 2500;
    if (hotel === "Luxury") hotelCost = 5000;

    let transportCost = 500;
    if (transport === "Train") transportCost = 1200;
    if (transport === "Flight") transportCost = 5000;

    const total =
      hotelCost * days * travelers +
      transportCost * travelers;

    setCost(total);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-8">
          ✈️ Trip Planner
        </h1>

        <div className="space-y-5">
<select
  value={state}
  onChange={(e) => setState(e.target.value)}
  className="w-full border rounded-lg p-3"
>
  <option value="">Select a State</option>

  {states.map((item) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ))}
</select>
<select
  value={days}
  onChange={(e) => setDays(Number(e.target.value))}
  className="w-full border rounded-lg p-3"
>
  <option value="">Select Days</option>

  {[...Array(15)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1} {index + 1 === 1 ? "Day" : "Days"}
    </option>
  ))}
</select>

         <select
  value={travelers}
  onChange={(e) => setTravelers(Number(e.target.value))}
  className="w-full border rounded-lg p-3"
>
  <option value="">Select Travelers</option>

  {[...Array(10)].map((_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1} {index + 1 === 1 ? "Traveler" : "Travelers"}
    </option>
  ))}
</select>

          <select
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>Budget</option>
            <option>Standard</option>
            <option>Luxury</option>
          </select>

          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option>Bus</option>
            <option>Train</option>
            <option>Flight</option>
          </select>

          <button
            onClick={calculateCost}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Calculate Trip Cost
          </button>

          {cost && (
            <div className="bg-green-100 rounded-xl p-6 mt-6">
              <h2 className="text-2xl font-bold mb-3">
                Estimated Trip Cost
              </h2>

              <p><strong>State:</strong> {state}</p>
              <p><strong>Days:</strong> {days}</p>
              <p><strong>Travelers:</strong> {travelers}</p>
              <p><strong>Hotel:</strong> {hotel}</p>
              <p><strong>Transport:</strong> {transport}</p>

              <h3 className="text-3xl font-bold mt-5 text-green-700">
                ₹ {cost.toLocaleString()}
              </h3>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchForm from "./components/SearchForm";
import HotelCards from "./components/HotelCards";
import Itinerary from "./components/Itinerary";
import BudgetSummary from "./components/BudgetSummary";
import PopularDestinations from "./components/PopularDestinations";
import TravelTips from "./components/TravelTips";
import Footer from "./components/Footer";
import TravelerType, { type TravelerTypeKey } from "./components/TravelerType";
import TripSuggestions from "./components/TripSuggestions";

import { hotels, itineraries } from "./data/travelData";
import type { Hotel, DayPlan } from "./data/travelData";

interface User {
  name: string;
  email: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("ts_current_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [searchedDest, setSearchedDest] = useState("");
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [itineraryPlans, setItineraryPlans] = useState<DayPlan[][]>([]);
  const [travelerType, setTravelerType] = useState<TravelerTypeKey | null>(null);

  function handleLogin(name: string, email: string) {
    const u = { name, email };
    setUser(u);
    localStorage.setItem("ts_current_user", JSON.stringify(u));
    setTimeout(() => {
      document.getElementById("traveler-type")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("ts_current_user");
    setTravelerType(null);
  }

  function handleSearch() {
    const key = destination.toLowerCase().trim();
    const matchedHotels = hotels[key] ?? hotels["default"];
    const matchedItinerary = itineraries[key] ?? itineraries["default"];
    setHotelList(matchedHotels);
    setItineraryPlans(matchedItinerary);
    setSearchedDest(destination);
    setTimeout(() => {
      document.getElementById("hotels")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function handleDestinationSelect(name: string) {
    setDestination(name);
    document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
  }

  function handlePlanClick() {
    document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Hero onPlanClick={handlePlanClick} />

      {user && (
        <div className="bg-primary bg-opacity-10 py-3 border-bottom">
          <div className="container d-flex align-items-center gap-2">
            <span className="fs-5">👋</span>
            <span className="fw-semibold text-primary">Welcome back, {user.name}! Pick your traveler type below to get personalized suggestions.</span>
          </div>
        </div>
      )}

      <SearchForm
        destination={destination}
        budget={budget}
        days={days}
        onDestinationChange={setDestination}
        onBudgetChange={setBudget}
        onDaysChange={setDays}
        onSearch={handleSearch}
      />

      {searchedDest && (
        <>
          <HotelCards hotels={hotelList} destination={searchedDest} />
          <Itinerary plans={itineraryPlans} destination={searchedDest} days={days} />
          <BudgetSummary
            destination={searchedDest}
            budget={budget}
            days={days}
            selectedHotel={hotelList[0] ?? null}
            plans={itineraryPlans}
          />
        </>
      )}

      <TravelerType selected={travelerType} onSelect={setTravelerType} />

      {travelerType && (
        <TripSuggestions
          travelerType={travelerType}
          onSelectDestination={(name) => {
            handleDestinationSelect(name);
          }}
        />
      )}

      <PopularDestinations onSelect={handleDestinationSelect} />
      <TravelTips />
      <Footer />
    </div>
  );
}

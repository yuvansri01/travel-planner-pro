import { useState, useRef } from "react";
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

import { hotels, itineraries } from "./data/travelData";
import type { Hotel, DayPlan } from "./data/travelData";

export default function App() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");
  const [searchedDest, setSearchedDest] = useState("");
  const [hotelList, setHotelList] = useState<Hotel[]>([]);
  const [itineraryPlans, setItineraryPlans] = useState<DayPlan[][]>([]);

  const searchRef = useRef<HTMLElement | null>(null);

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
      <Navbar />
      <Hero onPlanClick={handlePlanClick} />
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
      <PopularDestinations onSelect={handleDestinationSelect} />
      <TravelTips />
      <Footer />
    </div>
  );
}

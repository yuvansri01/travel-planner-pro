import type { TravelerTypeKey } from "./TravelerType";

interface TripPlan {
  destination: string;
  emoji: string;
  duration: string;
  budget: string;
  highlights: string[];
  tag: string;
  tagColor: string;
}

const suggestions: Record<TravelerTypeKey, TripPlan[]> = {
  student: [
    {
      destination: "Bali, Indonesia",
      emoji: "🏝️",
      duration: "7 days",
      budget: "$400–$600",
      highlights: ["Cheap hostels in Canggu", "Free beach days", "Local warung food ($2/meal)", "Scooter rental ($5/day)"],
      tag: "Budget Pick",
      tagColor: "success",
    },
    {
      destination: "Bangkok, Thailand",
      emoji: "🛕",
      duration: "5 days",
      budget: "$300–$500",
      highlights: ["Street food paradise", "Free temples", "Night markets", "Cheap hostels"],
      tag: "Backpacker Fave",
      tagColor: "success",
    },
    {
      destination: "Lisbon, Portugal",
      emoji: "🌊",
      duration: "6 days",
      budget: "$500–$700",
      highlights: ["Affordable in Europe", "Free museums on Sundays", "Day trip to Sintra", "Youth hostels"],
      tag: "Europe on a Budget",
      tagColor: "success",
    },
  ],
  solo: [
    {
      destination: "Kyoto, Japan",
      emoji: "⛩️",
      duration: "8 days",
      budget: "$1,200–$1,800",
      highlights: ["Solo temple walks", "Tea ceremony experience", "Local cooking class", "Arashiyama Bamboo Grove"],
      tag: "Self-Discovery",
      tagColor: "primary",
    },
    {
      destination: "New Zealand",
      emoji: "🏔️",
      duration: "10 days",
      budget: "$1,500–$2,500",
      highlights: ["Hobbiton tour", "Milford Sound hike", "Bungy jumping", "Free campsites"],
      tag: "Adventure",
      tagColor: "primary",
    },
    {
      destination: "Iceland",
      emoji: "🌋",
      duration: "7 days",
      budget: "$1,800–$2,800",
      highlights: ["Northern lights", "Ring Road drive", "Blue Lagoon", "Waterfalls & geysers"],
      tag: "Bucket List",
      tagColor: "primary",
    },
  ],
  couple: [
    {
      destination: "Santorini, Greece",
      emoji: "🌅",
      duration: "6 days",
      budget: "$2,500–$4,000",
      highlights: ["Caldera sunset views", "Wine tasting", "Boat tours", "Cave hotel suites"],
      tag: "Most Romantic",
      tagColor: "danger",
    },
    {
      destination: "Paris, France",
      emoji: "🗼",
      duration: "7 days",
      budget: "$2,000–$3,500",
      highlights: ["Eiffel Tower at night", "Seine River cruise", "Louvre Museum", "Montmartre stroll"],
      tag: "City of Love",
      tagColor: "danger",
    },
    {
      destination: "Maldives",
      emoji: "🐠",
      duration: "5 days",
      budget: "$3,000–$6,000",
      highlights: ["Overwater bungalow", "Snorkeling & diving", "Private beach", "Sunset dinner cruise"],
      tag: "Luxury Escape",
      tagColor: "danger",
    },
  ],
  family: [
    {
      destination: "Orlando, USA",
      emoji: "🎢",
      duration: "7 days",
      budget: "$3,000–$5,000",
      highlights: ["Walt Disney World", "Universal Studios", "SeaWorld", "LEGOLAND Florida"],
      tag: "Kids Love It",
      tagColor: "warning",
    },
    {
      destination: "Barcelona, Spain",
      emoji: "🏖️",
      duration: "8 days",
      budget: "$2,500–$4,000",
      highlights: ["Sagrada Família", "Park Güell", "Beach days", "Kid-friendly tapas"],
      tag: "Culture + Beach",
      tagColor: "warning",
    },
    {
      destination: "Singapore",
      emoji: "🦁",
      duration: "6 days",
      budget: "$2,000–$3,500",
      highlights: ["Gardens by the Bay", "Singapore Zoo", "Sentosa Island", "Night Safari"],
      tag: "Family Favourite",
      tagColor: "warning",
    },
  ],
};

const typeLabels: Record<TravelerTypeKey, string> = {
  student: "Students",
  solo: "Solo Travelers",
  couple: "Couples",
  family: "Families",
};

interface TripSuggestionsProps {
  travelerType: TravelerTypeKey;
  onSelectDestination: (dest: string) => void;
}

export default function TripSuggestions({ travelerType, onSelectDestination }: TripSuggestionsProps) {
  const trips = suggestions[travelerType];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">✨ Suggested Trips for {typeLabels[travelerType]}</h2>
          <p className="text-muted">Handpicked destinations perfect for your travel style</p>
        </div>
        <div className="row g-4">
          {trips.map((trip, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                <div
                  className="p-4 text-center"
                  style={{
                    background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)",
                    color: "white",
                  }}
                >
                  <div style={{ fontSize: "3.5rem" }}>{trip.emoji}</div>
                  <h5 className="fw-bold mt-2 mb-0">{trip.destination}</h5>
                  <div className="d-flex justify-content-center gap-2 mt-2">
                    <span className="badge bg-white text-dark">📅 {trip.duration}</span>
                    <span className="badge bg-white text-dark">💰 {trip.budget}</span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`badge bg-${trip.tagColor} px-3 py-2`}>{trip.tag}</span>
                  </div>
                  <h6 className="fw-bold text-muted small mb-2">TRIP HIGHLIGHTS</h6>
                  <ul className="list-unstyled mb-3">
                    {trip.highlights.map((h, j) => (
                      <li key={j} className="small mb-1">
                        <span className="text-success me-1">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary w-100 fw-semibold"
                    onClick={() => onSelectDestination(trip.destination.split(",")[0])}
                  >
                    Plan This Trip →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SearchFormProps {
  destination: string;
  budget: string;
  days: string;
  onDestinationChange: (v: string) => void;
  onBudgetChange: (v: string) => void;
  onDaysChange: (v: string) => void;
  onSearch: () => void;
}

const popularPlaces = ["Bali", "Paris", "Kyoto", "New York", "Santorini", "Rome", "Bangkok", "Dubai"];

export default function SearchForm({
  destination, budget, days,
  onDestinationChange, onBudgetChange, onDaysChange, onSearch
}: SearchFormProps) {
  return (
    <section id="search" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">🔍 Plan Your Trip</h2>
          <p className="text-muted">Enter your details to get hotel recommendations and a sample itinerary</p>
        </div>
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-4">
              <label className="form-label fw-semibold">📍 Destination</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="e.g. Bali, Paris, Tokyo..."
                value={destination}
                onChange={(e) => onDestinationChange(e.target.value)}
              />
              <div className="mt-2 d-flex flex-wrap gap-1">
                {popularPlaces.map((place) => (
                  <button
                    key={place}
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => onDestinationChange(place)}
                  >
                    {place}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">💰 Budget (USD)</label>
              <select
                className="form-select form-select-lg"
                value={budget}
                onChange={(e) => onBudgetChange(e.target.value)}
              >
                <option value="">Select budget</option>
                <option value="500">Under $500</option>
                <option value="1000">$500 – $1,000</option>
                <option value="2000">$1,000 – $2,000</option>
                <option value="5000">$2,000 – $5,000</option>
                <option value="10000">$5,000+</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">📅 Number of Days</label>
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="e.g. 5"
                min={1}
                max={30}
                value={days}
                onChange={(e) => onDaysChange(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary btn-lg w-100 fw-bold"
                onClick={onSearch}
                disabled={!destination || !budget || !days}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

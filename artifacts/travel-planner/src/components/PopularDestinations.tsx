import { destinations } from "../data/travelData";

interface PopularDestinationsProps {
  onSelect: (name: string) => void;
}

const categoryColors: Record<string, string> = {
  Beach: "info",
  City: "primary",
  Cultural: "warning",
  Adventure: "success",
};

export default function PopularDestinations({ onSelect }: PopularDestinationsProps) {
  return (
    <section id="destinations" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">🌏 Popular Destinations</h2>
          <p className="text-muted">Click on a destination to plan your trip there</p>
        </div>
        <div className="row g-4">
          {destinations.map((dest) => (
            <div key={dest.id} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden"
                style={{ cursor: "pointer", transition: "transform 0.2s" }}
                onClick={() => onSelect(dest.name.split(",")[0])}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={dest.image}
                    alt={dest.name}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x250?text=Destination"; }}
                  />
                  <span
                    className={`badge bg-${categoryColors[dest.category] || "secondary"} position-absolute top-0 end-0 m-2`}
                  >
                    {dest.category}
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{dest.name}</h5>
                  <p className="card-text text-muted small">{dest.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-semibold">
                      Avg. Budget: ${dest.avgBudget}
                    </span>
                    <button className="btn btn-outline-primary btn-sm">
                      Plan Trip →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

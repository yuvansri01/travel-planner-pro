import type { Hotel } from "../data/travelData";

interface HotelCardsProps {
  hotels: Hotel[];
  destination: string;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-warning">
      {"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}
      <span className="text-dark ms-1 small fw-semibold">{rating}</span>
    </span>
  );
}

export default function HotelCards({ hotels, destination }: HotelCardsProps) {
  if (!destination) return null;

  return (
    <section id="hotels" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">🏨 Recommended Hotels in {destination}</h2>
          <p className="text-muted">Hand-picked accommodations for every budget</p>
        </div>
        <div className="row g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="card-img-top"
                  style={{ height: "180px", objectFit: "cover" }}
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x180?text=Hotel"; }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{hotel.name}</h5>
                  <StarRating rating={hotel.rating} />
                  <div className="mt-2 d-flex flex-wrap gap-1 mb-3">
                    {hotel.amenities.map((a) => (
                      <span key={a} className="badge bg-light text-dark border">{a}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fs-4 fw-bold text-success">${hotel.price}</span>
                      <span className="text-muted small"> / night</span>
                    </div>
                    <button className="btn btn-primary btn-sm">Book Now</button>
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

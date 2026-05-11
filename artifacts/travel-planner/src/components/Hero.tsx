interface HeroProps {
  onPlanClick: () => void;
}

export default function Hero({ onPlanClick }: HeroProps) {
  return (
    <section
      className="text-white text-center py-5"
      style={{
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&h=700&fit=crop') center/cover no-repeat",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">Plan Your Dream Trip</h1>
        <p className="lead mb-4 fs-5">
          Discover amazing destinations, find the best hotels, and create personalized travel itineraries — all in one place.
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-warning btn-lg fw-bold px-4" onClick={onPlanClick}>
            🗺️ Start Planning
          </button>
          <a className="btn btn-outline-light btn-lg px-4" href="#destinations">
            🌏 Explore Destinations
          </a>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-4">
            <h3 className="fw-bold">500+</h3>
            <small>Destinations</small>
          </div>
          <div className="col-4">
            <h3 className="fw-bold">10K+</h3>
            <small>Hotels</small>
          </div>
          <div className="col-4">
            <h3 className="fw-bold">50K+</h3>
            <small>Happy Travelers</small>
          </div>
        </div>
      </div>
    </section>
  );
}

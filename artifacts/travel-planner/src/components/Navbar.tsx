export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)" }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🌍 TravelSmart
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#search">Plan Trip</a></li>
            <li className="nav-item"><a className="nav-link" href="#destinations">Destinations</a></li>
            <li className="nav-item"><a className="nav-link" href="#hotels">Hotels</a></li>
            <li className="nav-item"><a className="nav-link" href="#itinerary">Itinerary</a></li>
            <li className="nav-item"><a className="nav-link" href="#tips">Travel Tips</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

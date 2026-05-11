export default function Footer() {
  return (
    <footer className="text-white py-5" style={{ background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">🌍 TravelSmart</h5>
            <p className="text-white-50 small">
              Your smart travel companion. Plan trips, discover destinations, find hotels, and budget your travels — all in one place.
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled small text-white-50">
              <li><a href="#destinations" className="text-white-50 text-decoration-none">Destinations</a></li>
              <li><a href="#hotels" className="text-white-50 text-decoration-none">Hotels</a></li>
              <li><a href="#itinerary" className="text-white-50 text-decoration-none">Itineraries</a></li>
              <li><a href="#tips" className="text-white-50 text-decoration-none">Travel Tips</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Popular Destinations</h6>
            <ul className="list-unstyled small text-white-50">
              <li>🏝️ Bali, Indonesia</li>
              <li>🗼 Paris, France</li>
              <li>⛩️ Kyoto, Japan</li>
              <li>🗽 New York, USA</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Tip</h6>
            <div className="card bg-white bg-opacity-10 border-0 rounded-3 p-3">
              <small className="text-white-50">
                💡 <strong className="text-white">Did you know?</strong> Traveling on Tuesdays and Wednesdays is usually 20% cheaper than weekends!
              </small>
            </div>
          </div>
        </div>
        <hr className="border-white border-opacity-25 my-4" />
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <small className="text-white-50">© 2025 TravelSmart. Built with React + Bootstrap for college project.</small>
          <small className="text-white-50">Made with ❤️ for travelers worldwide</small>
        </div>
      </div>
    </footer>
  );
}

import AuthModal from "./AuthModal";

interface NavbarProps {
  user: { name: string; email: string } | null;
  onLogin: (name: string, email: string) => void;
  onLogout: () => void;
}

export default function Navbar({ user, onLogin, onLogout }: NavbarProps) {
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="#search">Plan Trip</a></li>
            <li className="nav-item"><a className="nav-link" href="#traveler-type">Trip Suggestions</a></li>
            <li className="nav-item"><a className="nav-link" href="#destinations">Destinations</a></li>
            <li className="nav-item"><a className="nav-link" href="#hotels">Hotels</a></li>
            <li className="nav-item"><a className="nav-link" href="#tips">Travel Tips</a></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <span className="text-white fw-semibold small">👤 {user.name}</span>
                <button className="btn btn-outline-light btn-sm" onClick={onLogout}>
                  Sign Out
                </button>
              </>
            ) : (
              <AuthModal onLogin={onLogin} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

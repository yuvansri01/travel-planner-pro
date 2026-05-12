import { useState } from "react";
import type { Hotel } from "../data/travelData";

interface User {
  name: string;
  email: string;
}

interface HotelCardsProps {
  hotels: Hotel[];
  destination: string;
  user: User | null;
  onLogin: (name: string, email: string) => void;
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

function SignInPrompt({
  hotel,
  onLogin,
  onClose,
}: {
  hotel: Hotel;
  onLogin: (name: string, email: string) => void;
  onClose: () => void;
}) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const users: Record<string, { name: string; password: string }> = JSON.parse(
      localStorage.getItem("ts_users") || "{}"
    );
    if (isSignUp) {
      if (!name.trim()) return setError("Please enter your name.");
      if (users[email]) return setError("An account with this email already exists.");
      users[email] = { name, password };
      localStorage.setItem("ts_users", JSON.stringify(users));
      onLogin(name, email);
    } else {
      const user = users[email];
      if (!user) return setError("No account found. Please sign up first.");
      if (user.password !== password) return setError("Incorrect password.");
      onLogin(user.name, email);
    }
  }

  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0,0,0,0.65)", position: "fixed", inset: 0, zIndex: 9999 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
          <div
            className="p-4 text-white text-center"
            style={{ background: "linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%)" }}
          >
            <div style={{ fontSize: "2.5rem" }}>🔐</div>
            <h5 className="fw-bold mt-2 mb-1">Sign in to Book</h5>
            <p className="small mb-0 text-white-75">
              You need an account to book <strong>{hotel.name}</strong>
            </p>
          </div>
          <div className="p-4">
            <div className="d-flex gap-2 mb-4">
              <button
                className={`btn flex-fill fw-semibold ${!isSignUp ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => { setIsSignUp(false); setError(""); }}
              >
                Sign In
              </button>
              <button
                className={`btn flex-fill fw-semibold ${isSignUp ? "btn-primary" : "btn-outline-secondary"}`}
                onClick={() => { setIsSignUp(true); setError(""); }}
              >
                Sign Up
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Alex Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              {error && <div className="alert alert-danger py-2 small">{error}</div>}
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                {isSignUp ? "Create Account & Book" : "Sign In & Book"}
              </button>
            </form>
            <button className="btn btn-link btn-sm w-100 mt-2 text-muted" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingModal({
  hotel,
  user,
  onClose,
}: {
  hotel: Hotel;
  user: User;
  onClose: () => void;
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [confirmed, setConfirmed] = useState(false);

  const nights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;
  const total = nights * hotel.price;

  function handleBook(e: React.FormEvent) {
    e.preventDefault();
    const booking = {
      hotel: hotel.name,
      checkIn,
      checkOut,
      guests,
      name: user.name,
      email: user.email,
      total,
      bookedAt: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("ts_bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("ts_bookings", JSON.stringify(existing));
    setConfirmed(true);
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0,0,0,0.6)", position: "fixed", inset: 0, zIndex: 9999 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 border-0 shadow-lg">
          {confirmed ? (
            <div className="modal-body text-center py-5 px-4">
              <div style={{ fontSize: "4rem" }}>🎉</div>
              <h4 className="fw-bold text-success mt-2">Booking Confirmed!</h4>
              <p className="text-muted mb-3">
                Your stay at <strong>{hotel.name}</strong> has been booked successfully.
              </p>
              <div className="card border-0 bg-success bg-opacity-10 rounded-4 p-3 mb-4 text-start">
                <div className="row g-2 small">
                  <div className="col-6"><span className="text-muted">Guest:</span> <strong>{user.name}</strong></div>
                  <div className="col-6"><span className="text-muted">Email:</span> <strong>{user.email}</strong></div>
                  <div className="col-6"><span className="text-muted">Check-in:</span> <strong>{checkIn}</strong></div>
                  <div className="col-6"><span className="text-muted">Check-out:</span> <strong>{checkOut}</strong></div>
                  <div className="col-6"><span className="text-muted">Guests:</span> <strong>{guests}</strong></div>
                  <div className="col-6"><span className="text-muted">Nights:</span> <strong>{nights}</strong></div>
                  <div className="col-12 mt-1 pt-1 border-top">
                    <span className="text-muted">Total Paid:</span>{" "}
                    <strong className="text-success fs-5">${total}</strong>
                  </div>
                </div>
              </div>
              <p className="text-muted small">Booking saved. Have a great trip! ✈️</p>
              <button className="btn btn-success px-4 fw-bold" onClick={onClose}>Done</button>
            </div>
          ) : (
            <>
              <div className="modal-header border-0 pb-0 px-4 pt-4">
                <div>
                  <h5 className="modal-title fw-bold">🏨 Book {hotel.name}</h5>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <StarRating rating={hotel.rating} />
                    <span className="text-muted small">·</span>
                    <span className="text-success fw-bold">${hotel.price} / night</span>
                  </div>
                </div>
                <button className="btn-close" onClick={onClose} />
              </div>
              <div className="modal-body px-4 pb-4">
                <div className="alert alert-primary py-2 small mb-3">
                  👤 Booking as <strong>{user.name}</strong> ({user.email})
                </div>
                <form onSubmit={handleBook}>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Check-In Date</label>
                      <input
                        type="date"
                        className="form-control"
                        min={today}
                        value={checkIn}
                        onChange={(e) => { setCheckIn(e.target.value); setCheckOut(""); }}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Check-Out Date</label>
                      <input
                        type="date"
                        className="form-control"
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-semibold">Number of Guests</label>
                      <select
                        className="form-select"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {nights > 0 && (
                    <div className="card border-0 bg-primary bg-opacity-10 rounded-3 p-3 mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted small">
                          ${hotel.price} × {nights} night{nights > 1 ? "s" : ""}
                        </span>
                        <span className="fw-bold fs-5 text-primary">${total} total</span>
                      </div>
                    </div>
                  )}
                  <div className="d-flex gap-2 mt-4">
                    <button type="button" className="btn btn-outline-secondary flex-fill" onClick={onClose}>
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary flex-fill fw-bold"
                      disabled={nights <= 0}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HotelCards({ hotels, destination, user, onLogin }: HotelCardsProps) {
  const [pendingHotel, setPendingHotel] = useState<Hotel | null>(null);
  const [bookingHotel, setBookingHotel] = useState<Hotel | null>(null);

  if (!destination) return null;

  function handleBookClick(hotel: Hotel) {
    if (user) {
      setBookingHotel(hotel);
    } else {
      setPendingHotel(hotel);
    }
  }

  function handleLoginSuccess(name: string, email: string) {
    onLogin(name, email);
    const hotel = pendingHotel;
    setPendingHotel(null);
    setTimeout(() => setBookingHotel(hotel), 100);
  }

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
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleBookClick(hotel)}
                    >
                      {user ? "Book Now" : "🔐 Book Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!user && (
          <p className="text-center text-muted small mt-3">
            🔐 Sign in or create a free account to book hotels
          </p>
        )}
      </div>

      {pendingHotel && (
        <SignInPrompt
          hotel={pendingHotel}
          onLogin={handleLoginSuccess}
          onClose={() => setPendingHotel(null)}
        />
      )}

      {bookingHotel && user && (
        <BookingModal
          hotel={bookingHotel}
          user={user}
          onClose={() => setBookingHotel(null)}
        />
      )}
    </section>
  );
}

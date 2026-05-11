import { useState } from "react";

interface AuthModalProps {
  onLogin: (name: string, email: string) => void;
}

export default function AuthModal({ onLogin }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

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
    setShow(false);
  }

  if (!show) {
    return (
      <button
        className="btn btn-warning fw-bold px-3"
        onClick={() => setShow(true)}
      >
        🔐 Sign In / Sign Up
      </button>
    );
  }

  return (
    <div
      className="modal d-block"
      style={{ background: "rgba(0,0,0,0.6)", position: "fixed", inset: 0, zIndex: 9999 }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold">
              {isSignUp ? "✨ Create Account" : "👋 Welcome Back"}
            </h5>
            <button className="btn-close" onClick={() => setShow(false)} />
          </div>
          <div className="modal-body px-4 pb-4">
            <p className="text-muted small mb-4">
              {isSignUp
                ? "Sign up to save your trips and get personalized suggestions."
                : "Sign in to access your saved trips and personalized plans."}
            </p>
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
              <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
                {isSignUp ? "Create Account" : "Sign In"}
              </button>
              <div className="text-center small">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 fw-semibold"
                  onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

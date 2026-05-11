import { travelTips } from "../data/travelData";

export default function TravelTips() {
  return (
    <section id="tips" className="py-5" style={{ background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">💡 Travel Tips</h2>
          <p className="text-muted">Pro tips to make your trip smoother and more affordable</p>
        </div>
        <div className="row g-4">
          {travelTips.map((tip, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-3">
                <div className="d-flex align-items-start gap-3">
                  <span style={{ fontSize: "2rem" }}>{tip.icon}</span>
                  <div>
                    <h6 className="fw-bold mb-1">{tip.title}</h6>
                    <p className="text-muted small mb-0">{tip.tip}</p>
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

import type { DayPlan } from "../data/travelData";

interface ItineraryProps {
  plans: DayPlan[][];
  destination: string;
  days: string;
}

const timeColors: Record<string, string> = {
  Morning: "success",
  Afternoon: "warning",
  Evening: "primary",
};

export default function Itinerary({ plans, destination, days }: ItineraryProps) {
  if (!destination || !plans.length) return null;

  const numDays = Math.max(1, parseInt(days) || 1);
  const displayPlans = Array.from({ length: numDays }, (_, i) => plans[i % plans.length]);

  return (
    <section id="itinerary" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">🗓️ Sample Itinerary for {destination}</h2>
          <p className="text-muted">{numDays}-day travel plan tailored for you</p>
        </div>
        <div className="row g-4">
          {displayPlans.map((dayPlan, dayIndex) => (
            <div key={dayIndex} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-header bg-primary text-white rounded-top-4 fw-bold">
                  Day {dayIndex + 1}
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush">
                    {dayPlan.map((item, i) => (
                      <li key={i} className="list-group-item d-flex justify-content-between align-items-start py-3">
                        <div>
                          <span className={`badge bg-${timeColors[item.time] || "secondary"} me-2`}>
                            {item.time}
                          </span>
                          <span className="small fw-semibold">{item.activity}</span>
                        </div>
                        <span className="text-success fw-bold small">${item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-white text-end text-muted small rounded-bottom-4">
                  Day total: <strong className="text-success">${dayPlan.reduce((s, i) => s + i.cost, 0)}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

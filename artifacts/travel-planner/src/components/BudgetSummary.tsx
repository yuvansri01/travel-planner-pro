import type { Hotel, DayPlan } from "../data/travelData";

interface BudgetSummaryProps {
  destination: string;
  budget: string;
  days: string;
  selectedHotel: Hotel | null;
  plans: DayPlan[][];
}

export default function BudgetSummary({ destination, budget, days, selectedHotel, plans }: BudgetSummaryProps) {
  if (!destination || !budget || !days) return null;

  const numDays = parseInt(days) || 1;
  const totalBudget = parseInt(budget);
  const hotelTotal = selectedHotel ? selectedHotel.price * numDays : (plans.length ? 80 * numDays : 0);
  const activitiesTotal = plans.slice(0, numDays).reduce((sum, day) => sum + day.reduce((s, i) => s + i.cost, 0), 0);
  const foodTotal = numDays * 40;
  const transportTotal = numDays * 20;
  const totalEstimate = hotelTotal + activitiesTotal + foodTotal + transportTotal;
  const remaining = totalBudget - totalEstimate;
  const usedPercent = Math.min((totalEstimate / totalBudget) * 100, 100);

  const items = [
    { label: "🏨 Hotels", amount: hotelTotal, color: "primary" },
    { label: "🎭 Activities", amount: activitiesTotal, color: "success" },
    { label: "🍽️ Food & Dining", amount: foodTotal, color: "warning" },
    { label: "🚌 Transport", amount: transportTotal, color: "info" },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">💰 Budget Summary</h2>
          <p className="text-muted">Estimated breakdown for your {numDays}-day trip to {destination}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Your Budget</h5>
                <span className="fs-4 fw-bold text-primary">${totalBudget}</span>
              </div>
              <div className="progress mb-4" style={{ height: "20px" }}>
                <div
                  className={`progress-bar bg-${remaining >= 0 ? "success" : "danger"} progress-bar-striped`}
                  style={{ width: `${usedPercent}%` }}
                >
                  {Math.round(usedPercent)}% used
                </div>
              </div>
              <div className="row g-3 mb-4">
                {items.map((item) => (
                  <div key={item.label} className="col-6">
                    <div className={`card border-0 bg-${item.color} bg-opacity-10 rounded-3 p-3`}>
                      <div className="fw-semibold">{item.label}</div>
                      <div className={`fs-5 fw-bold text-${item.color}`}>${item.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold fs-5">Total Estimated Cost</div>
                  <small className="text-muted">Based on your trip details</small>
                </div>
                <div className="text-end">
                  <div className="fs-4 fw-bold">${totalEstimate}</div>
                  <div className={`fw-semibold ${remaining >= 0 ? "text-success" : "text-danger"}`}>
                    {remaining >= 0 ? `$${remaining} remaining` : `$${Math.abs(remaining)} over budget!`}
                  </div>
                </div>
              </div>
              {remaining < 0 && (
                <div className="alert alert-warning mt-3 mb-0">
                  ⚠️ Your estimated costs exceed your budget. Consider reducing your hotel choice or number of activities.
                </div>
              )}
              {remaining >= 0 && (
                <div className="alert alert-success mt-3 mb-0">
                  ✅ Great! You're within budget with ${remaining} to spare for souvenirs and extras.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

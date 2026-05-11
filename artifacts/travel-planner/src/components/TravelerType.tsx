export type TravelerTypeKey = "student" | "solo" | "couple" | "family";

interface TravelerTypeProps {
  selected: TravelerTypeKey | null;
  onSelect: (type: TravelerTypeKey) => void;
}

const types = [
  {
    key: "student" as TravelerTypeKey,
    emoji: "🎓",
    label: "Student",
    description: "Budget-friendly adventures on a shoestring. Hostels, backpacking, and local food.",
    color: "success",
    bg: "#e8f5e9",
  },
  {
    key: "solo" as TravelerTypeKey,
    emoji: "🧳",
    label: "Solo",
    description: "Go at your own pace. Freedom, flexibility, and self-discovery.",
    color: "primary",
    bg: "#e3f2fd",
  },
  {
    key: "couple" as TravelerTypeKey,
    emoji: "💑",
    label: "Couple",
    description: "Romantic getaways with cozy hotels, candlelit dinners, and sunset views.",
    color: "danger",
    bg: "#fce4ec",
  },
  {
    key: "family" as TravelerTypeKey,
    emoji: "👨‍👩‍👧‍👦",
    label: "Family",
    description: "Fun for all ages with kid-friendly activities, theme parks, and comfort stays.",
    color: "warning",
    bg: "#fff8e1",
  },
];

export default function TravelerType({ selected, onSelect }: TravelerTypeProps) {
  return (
    <section id="traveler-type" className="py-5" style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">🧭 Who Are You Traveling As?</h2>
          <p className="text-muted">Choose your traveler type to get personalized trip suggestions</p>
        </div>
        <div className="row g-4 justify-content-center">
          {types.map((t) => (
            <div key={t.key} className="col-6 col-md-3">
              <div
                className={`card border-2 rounded-4 text-center p-3 h-100 ${selected === t.key ? `border-${t.color} shadow` : "border-0 shadow-sm"}`}
                style={{
                  cursor: "pointer",
                  background: selected === t.key ? t.bg : "white",
                  transition: "all 0.2s ease",
                  transform: selected === t.key ? "translateY(-4px)" : "none",
                }}
                onClick={() => onSelect(t.key)}
              >
                <div style={{ fontSize: "3rem" }}>{t.emoji}</div>
                <h5 className={`fw-bold mt-2 text-${t.color}`}>{t.label}</h5>
                <p className="text-muted small mb-0">{t.description}</p>
                {selected === t.key && (
                  <div className={`badge bg-${t.color} mt-2`}>Selected ✓</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

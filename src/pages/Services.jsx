import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Audit & Assurance",
      desc: "Comprehensive audit services ensuring accuracy and compliance with regulatory standards.",
      points: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Concurrent Audits",
      ],
    },
    {
      title: "Income Tax Services",
      desc: "Expert tax planning and filing services for individuals and businesses.",
      points: [
        "Tax Planning",
        "Return Filing",
        "Tax Advisory",
        "Dispute Resolution",
      ],
    },
    {
      title: "GST Services",
      desc: "Complete GST compliance solutions from registration to return filing.",
      points: [
        "GST Registration",
        "Return Filing",
        "GST Audits",
        "Compliance Management",
      ],
    },
    {
      title: "Corporate Advisory",
      desc: "Strategic guidance for business growth, restructuring, and transactions.",
      points: [
        "M&A Advisory",
        "Business Restructuring",
        "Valuation Services",
        "Financial Planning",
      ],
    },
  ];

  return (
    <>
      <Header />

      <main className="section" style={{ paddingTop: 140, paddingBottom: 120 }}>
        {/* Top Block */}
        <div className="container" style={{ marginBottom: 80 }}>
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: 999,
              background: "var(--secondary)",
              fontSize: 14,
              marginBottom: 24,
            }}
          >
            Our Services
          </span>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 88px)",
              lineHeight: 1.05,
              marginBottom: 24,
              fontFamily: "var(--font-serif)",
            }}
          >
            Comprehensive{" "}
            <span style={{ color: "var(--accent)" }}>Financial</span>{" "}
            <br />
            <span style={{ color: "var(--accent)" }}>Solutions</span>
          </h1>

          <p
            style={{
              maxWidth: 760,
              fontSize: 20,
              lineHeight: 1.7,
              color: "hsl(30,10%,35%)",
            }}
          >
            From taxation to corporate advisory, we offer a complete suite of
            professional services designed to help you achieve your financial
            objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: 40,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--secondary)",
                borderRadius: 28,
                padding: 36,
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <h3
                style={{
                  fontSize: 28,
                  marginBottom: 12,
                  fontFamily: "var(--font-serif)",
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "hsl(30,10%,35%)",
                  marginBottom: 20,
                }}
              >
                {s.desc}
              </p>

              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {s.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      marginBottom: 8,
                      color: "hsl(30,10%,35%)",
                    }}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

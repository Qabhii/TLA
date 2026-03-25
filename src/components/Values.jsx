import { Target, Eye, Heart } from "lucide-react";

export default function Values() {
  const items = [
    {
      title: "Our Mission",
      desc: "To empower businesses and individuals with exceptional financial services that drive sustainable growth and success.",
      icon: <Target size={28} color="#d69a2d" />,
    },
    {
      title: "Our Vision",
      desc: "To be the most trusted financial advisory firm, setting industry benchmarks for excellence and client satisfaction.",
      icon: <Eye size={28} color="#d69a2d" />,
    },
    {
      title: "Our Values",
      desc: "We believe in delivering services with integrity, independence, and professional excellence. Our approach is client-centric, solution-oriented, and driven by a deep understanding of regulatory frameworks, financial markets, and business realities. We focus on building long-term relationships through consistent quality, confidentiality, and responsiveness.",
      icon: <Heart size={28} color="#d69a2d" />,
    },
  ];

  return (
    <section className="section">
      {/* Top Text */}
      <div className="container" style={{ textAlign: "center", marginBottom: 80 }}>
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: 999,
            background: "var(--secondary)",
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          Who We Are
        </span>

        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 12 }}>
          Driven by Purpose, Guided by Excellence
        </h2>

        <p
          style={{
            maxWidth: 620,
            margin: "0 auto",
            fontSize: 18,
            color: "hsl(30,10%,35%)",
          }}
        >
          For over two decades, we've been committed to delivering value that goes beyond numbers.
        </p>
      </div>

      {/* Values Row */}
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 64,
          textAlign: "center",
        }}
      >
        {items.map((item) => (
          <div key={item.title}>
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: "var(--secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              {item.icon}
            </div>

            <h3 style={{ fontSize: 28, marginBottom: 12 }}>{item.title}</h3>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "hsl(30,10%,35%)",
                maxWidth: 300,
                margin: "0 auto",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

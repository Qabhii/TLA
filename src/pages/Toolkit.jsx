import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";

export default function Toolkit() {
  return (
    <>
      <Header />

      <main
        style={{
          paddingTop: 140,
          paddingBottom: 120,
          background: "#f8f5f0",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
        <section
          className="container"
          style={{
            textAlign: "center",
            marginBottom: 70,
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(182,141,64,0.10)",
              color: "#b68d40",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Professional Toolkit
          </span>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 82px)",
              lineHeight: 1.05,
              marginBottom: 28,
              fontFamily: "var(--font-serif)",
              color: "#1a1a1a",
            }}
          >
            Financial &
            <br />
            Compliance Toolkit
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto",
              fontSize: 18,
              lineHeight: 1.9,
              color: "hsl(30,10%,35%)",
            }}
          >
            Explore strategic financial, taxation,
            compliance, and advisory solutions designed
            for modern enterprises and professionals.
          </p>
        </section>

        {/* TOOLKIT GRID */}
        <div className="container">
          <ServicesGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}
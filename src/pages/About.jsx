import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      <main
        className="section"
        style={{
          paddingTop: 140,
          paddingBottom: 120,
        }}
      >
        <div className="container">
          {/* Pill */}
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
            About Us
          </span>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 88px)",
              lineHeight: 1.05,
              marginBottom: 32,
              fontFamily: "var(--font-serif)",
            }}
          >
            Building Trust Through{" "}
            <br />
            <span style={{ color: "var(--accent)" }}>Excellence</span>
          </h1>

          {/* Description */}
          <p
            style={{
              maxWidth: 860,
              fontSize: 20,
              lineHeight: 1.7,
              color: "hsl(30,10%,35%)",
            }}
          >
            <p> We are a multidisciplinary professional services firm providing integrated audit, tax, advisory, transaction, and investment services to corporates, financial institutions, SMEs, startups, high-net-worth individuals, and family offices. Our firm combines deep technical expertise with strong commercial acumen to deliver practical, value-driven solutions aligned with client objectives</p>
      
           <p> 
With a strong foundation in assurance and taxation, and a growing focus on corporate finance, capital markets, and investment advisory, we position ourselves as a trusted partner across the business lifecycle — from incorporation and growth to restructuring, transactions, and succession.</p>


          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

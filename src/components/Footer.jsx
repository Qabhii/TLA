import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1f1c19, #2a241f)",
        color: "#eae6df",
        paddingTop: 80,
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 80,
          paddingBottom: 60,
        }}
      >
        {/* Left Block */}
        <div>
          <p
            style={{
              maxWidth: 420,
              fontSize: 16,
              lineHeight: 1.7,
              color: "#d6d1c7",
              marginBottom: 40,
            }}
          >
            Trusted financial partners committed to excellence. We provide
            comprehensive accounting, taxation, and advisory services tailored
            to your success.
          </p>

          <h4 style={{ fontSize: 20, marginBottom: 16 }}>Contact Us</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <MapPin size={18} color="#d69a2d" />
              <span style={{ color: "#cfc9be" }}>
                1/5871 (old Number 1/630) Kabool Nagar Tikona Park, Shahdara,
                Delhi – 110032, India
              </span>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Phone size={18} color="#d69a2d" />
              <a
                href="tel:+917830667096"
                style={{ color: "#cfc9be", textDecoration: "none" }}
              >
                78306 67096
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Phone size={18} color="#d69a2d" />
              <a
                href="tel:+919990320685"
                style={{ color: "#cfc9be", textDecoration: "none" }}
              >
                99903 20685
              </a>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Mail size={18} color="#d69a2d" />
              <a
                href="mailto:contact@trustleafadvisors.in"
                style={{ color: "#cfc9be", textDecoration: "none" }}
              >
                contact@trustleafadvisors.in
              </a>
            </div>
          </div>
        </div>

        {/* Right Block */}
        <div>
          <h4 style={{ fontSize: 20, marginBottom: 24 }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="/" style={{ color: "#d6d1c7", textDecoration: "none" }}>
              Home
            </a>
            <a href="/about" style={{ color: "#d6d1c7", textDecoration: "none" }}>
              About
            </a>
            <a
              href="/services"
              style={{ color: "#d6d1c7", textDecoration: "none" }}
            >
              Services
            </a>
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d6d1c7", textDecoration: "none" }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "24px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#a9a39a",
            fontSize: 14,
          }}
        >
          <span>© 2025 TrustLeaf Advisors. All rights reserved.</span>
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#a9a39a", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
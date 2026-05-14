// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";


// export default function Header() {
// const [open, setOpen] = useState(false);
// const [blur, setBlur] = useState(false);


// useEffect(() => {
// const onScroll = () => setBlur(window.scrollY > 20);
// window.addEventListener("scroll", onScroll);
// return () => window.removeEventListener("scroll", onScroll);
// }, []);


// return (
// <header className={`fixed w-full z-50 ${blur ? "backdrop-blur bg-[var(--background)]/80" : ""}`}>
// <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
// <div className="flex items-center gap-3">
// <motion.div
// className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--secondary)] relative"
// animate={{ boxShadow: ["0 0 0px gold", "0 0 12px gold", "0 0 0px gold"] }}
// transition={{ repeat: Infinity, duration: 2 }}
// >
// <span className="font-bold">CA</span>
// </motion.div>
// <span className="font-semibold">Chartered Firm</span>
// </div>

// <nav className="hidden md:flex gap-6">
// <Link to="/">Home</Link>
// <Link to="/about">About</Link>
// <Link to="/services">Services</Link>
// </nav>


// <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
// </div>


// {open && (
// <div className="md:hidden p-4 bg-[var(--background)] shadow-elegant">
// <Link className="block py-2" to="/">Home</Link>
// <Link className="block py-2" to="/about">About</Link>
// <Link className="block py-2" to="/services">Services</Link>
// </div>
// )}
// </header>
// );
// }

//client/src/component/header.jsx 
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (to, label) => (
    <Link
      to={to}
      style={{
        position: "relative",
        padding: "6px 2px",
        color: location.pathname === to ? "var(--accent)" : "inherit",
        fontWeight: 500,
      }}
    >
      {label}
      {location.pathname === to && (
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: -6,
            width: "100%",
            height: 2,
            background: "var(--accent)",
            borderRadius: 2,
          }}
        />
      )}
    </Link>
  );

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: scrolled ? "rgba(255,250,243,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Logo + Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                       <img
              src="/logo.jpeg"
              alt="CA Logo"
              style={{ width: "90%", height: "90%", objectFit: "cover" }}
            />
          </div>

          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 800, fontSize: 22 }}>
              <p>TrustLeaf Advisors</p>
            </div>
          
          </div>
        </div>

        {/* Center Nav (Desktop) */}
        <nav
          className="desktop-nav"
          style={{ display: "none", gap: 28, alignItems: "center" }}
        >
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/services", "Services")}
          {navItem("/toolkit", "Toolkit")}
        </nav>

        {/* Right CTA */}
        <div className="desktop-nav" style={{ display: "none" }}>
          <button
            className="btn-primary"
            style={{ padding: "12px 22px", borderRadius: 999 }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

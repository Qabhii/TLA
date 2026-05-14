// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="section">
//       <div className="container" style={{ textAlign: "center" }}>
//         <motion.div
//           className="shadow-gold"
//           style={{
//             width: 96,
//             height: 96,
//             borderRadius: "50%",
//             background: "var(--secondary)",
//             margin: "0 auto 32px",
//           }}
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//         />

//         <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", marginBottom: 16 }}>
//           Trusted <span style={{ color: "var(--accent)" }}>Financial</span> Guidance
//         </h1>

//         <p style={{ maxWidth: 560, margin: "0 auto 32px", fontSize: 18 }}>
//           Professional CA services designed for growth, clarity, and compliance.
//         </p>

//         <button className="btn-primary">Get Started</button>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="section">
//       <div className="container">

//         {/* TOP CONTAINER */}
//         <div style={{ textAlign: "center", marginBottom: 80 }}>
//           <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", marginBottom: 20 }}>
//             Your Trusted{" "}
//             <span style={{ color: "var(--accent)" }}>
//               Financial Partners
//             </span>{" "}
//             for Success
//           </h1>

//           <p
//             style={{
//               maxWidth: 640,
//               margin: "0 auto 32px",
//               fontSize: 18,
//               lineHeight: 1.6,
//               color: "hsl(30,10%,35%)",
//             }}
//           >
//             We combine decades of expertise with modern solutions to deliver
//             exceptional accounting, taxation, and business advisory services
//             that drive your growth.
//           </p>

//           <button className="btn-primary">
//             Explore Our Services
//           </button>
//         </div>

//         {/* BOTTOM CONTAINER */}
//         <div
//           style={{
//             position: "relative",
//             width: 360,
//             height: 360,
//             margin: "0 auto",
//           }}
//         >
//           {/* Floating Logo */}
//           <motion.div
//             animate={{ y: [0, -12, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             style={{
//               width: 260,
//               height: 260,
//               borderRadius: "50%",
//               background: "var(--primary)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               margin: "50px auto",
//               position: "relative",
//               zIndex: 2,
//             }}
//             className="shadow-elegant"
//           >
//             <img
//               src="/tla1.jpeg"
//               alt="CA Logo"
//               style={{ width: "70%", height: "70%", objectFit: "contain" }}
//             />
//           </motion.div>

//           {/* Rotating Decorative Ring */}
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               borderRadius: "50%",
//               border: "2px dashed rgba(200,150,60,0.4)",
//             }}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/services/slide1.png",
    title: "Trusted Financial Advisors",
    subtitle:
      "Providing accounting, taxation, and advisory services with clarity and confidence.",
  },
  {
    image: "/services/slide2.png",
    title: "Comprehensive Financial Solutions",
    subtitle:
      "From audits to compliance, we help businesses stay strong and compliant.",
  },
  {
    image: "/services/slide3.png",
    title: "Guiding Businesses Forward",
    subtitle:
      "Strategic financial guidance tailored for long-term growth and stability.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: 340, // ≈ 6cm visual height
        overflow: "hidden",
        marginTop: 96, // accounts for fixed header
      }}
    >
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25))",
              display: "flex",
              alignItems: "center",
              paddingLeft: "8%",
            }}
          >
            <div style={{ maxWidth: 520, color: "#fff" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 4vw, 36px)",
                  marginBottom: 8,
                  fontFamily: "var(--font-serif)",
                }}
              >
                {slides[index].title}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {slides[index].subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

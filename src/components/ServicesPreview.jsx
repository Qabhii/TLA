


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ServicesGrid({
//   cardWidth = 320,
//   cardHeight = 300,
//   ratio = null,
// }) {
//   const [detailMode, setDetailMode] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Corporate & Business Advisory",
//       image: "/services/corporate.jpg",
//       points: [
//         {
//           label: "Corporate Strategy & Governance",
//           detail:
//             "We assist organizations in building robust governance structures and long-term corporate strategies.",
//         },
//         {
//           label: "Risk Advisory",
//           detail:
//             "Identification and mitigation of financial, operational, and regulatory risks.",
//         },
//         {
//           label: "Internal Audits & Process Reviews",
//           detail:
//             "Independent reviews to strengthen internal controls and operational efficiency.",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Tax & Regulatory Compliance",
//       image: "/services/tax.jpg",
//       points: [
//         {
//           label: "Tax Planning & Filing",
//           detail:
//             "Structured tax planning and accurate filing aligned with prevailing laws.",
//         },
//         {
//           label: "Litigation Support",
//           detail:
//             "Representation and documentation support for assessments and appeals.",
//         },
//         {
//           label: "Regulatory Compliance",
//           detail:
//             "Complete management of statutory and regulatory compliance obligations.",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Financial Management & Reporting",
//       image: "/services/finance.jpg",
//       points: [
//         {
//           label: "Financial Statements",
//           detail:
//             "Preparation and review of compliant and accurate financial statements.",
//         },
//         {
//           label: "Budgeting & Forecasting",
//           detail:
//             "Forward-looking financial planning to support business decisions.",
//         },
//         {
//           label: "Cash Flow Management",
//           detail:
//             "Optimizing liquidity and managing cash flows effectively.",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "Forensic & Transactional Audit",
//       image: "/services/forensic.jpg",
//       points: [
//         {
//           label: "Fraud Detection",
//           detail:
//             "Investigative audits to detect and prevent financial fraud.",
//         },
//         {
//           label: "Due Diligence",
//           detail:
//             "Financial and operational due diligence for transactions.",
//         },
//         {
//           label: "Data Analytics",
//           detail:
//             "Advanced analytics to uncover patterns and irregularities.",
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "Sector-Specific Solutions",
//       image: "/services/sector.jpg",
//       points: [
//         {
//           label: "Industrial Advisory",
//           detail:
//             "Customized advisory for manufacturing and industrial sectors.",
//         },
//         {
//           label: "Banking & Finance",
//           detail:
//             "Specialized services for banks and financial institutions.",
//         },
//         {
//           label: "Government & PSU",
//           detail:
//             "Compliance and advisory for government bodies and PSUs.",
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "Professional Services for CA / Finance Experts",
//       image: "/services/professionals.jpg",
//       points: [
//         {
//           label: "Advisory & Knowledge Sharing",
//           detail:
//             "Collaborative advisory and professional knowledge exchange.",
//         },
//         {
//           label: "Training Programs",
//           detail:
//             "Structured training and capacity-building programs.",
//         },
//         {
//           label: "Collaborative Compliance",
//           detail:
//             "Joint compliance support for professional practices.",
//         },
//       ],
//     },
//   ];

//   const computedHeight = ratio ? cardWidth * ratio : cardHeight;
//   const isDetailActive = Boolean(detailMode);

//   return (
//     <section className="section">
//       <div className="container">
//         <AnimatePresence mode="wait">
//           {isDetailActive ? (
//             <motion.div
//               key="detail"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               style={{ display: "flex", gap: 40 }}
//             >
//               {/* ACTIVE CARD */}
//               <motion.div
//                 initial={{ x: 0 }}
//                 animate={{ x: -40 }}
//                 transition={{
//   duration: 1.0,
//   ease: [0.22, 1, 0.36, 1], // smooth cinematic ease
//   delay: 0.1,
// }}

//                 style={{
//                   width: cardWidth,
//                   height: computedHeight,
//                   backgroundImage: `url(${detailMode.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: 20,
//                   position: "relative",
//                   boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))",
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: 24,
//                     left: 20,
//                     color: "#fff",
//                   }}
//                 >
//                   <h3>{detailMode.title}</h3>
//                 </div>
//               </motion.div>

//               {/* DETAIL PANEL */}
//               <motion.div
//                 initial={{ x: 60, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: 60, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 style={{
//                   flex: 1,
//                   background: "var(--secondary)",
//                   borderRadius: 20,
//                   padding: 40,
//                   boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
//                 }}
//                 onMouseLeave={() => setDetailMode(null)}
//               >
//                 <h2>{detailMode.title}</h2>
//                 <h4 style={{ color: "var(--accent)" }}>
//                   {detailMode.point}
//                 </h4>
//                 <p style={{ lineHeight: 1.7 }}>
//                   {detailMode.detail}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="grid"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: 32,
//               }}
//             >
//               {services.map((s) => (
//                 <motion.div
//                   key={s.id}
//                   whileHover={{ scale: 1.02 }}
//                   style={{
//                     width: cardWidth,
//                     height: computedHeight,
//                     perspective: 1200,
//                   }}
//                 >
//                   <div
//                     className="flip"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       position: "relative",
//                       transformStyle: "preserve-3d",
//                       transition: "transform 0.6s ease",
//                     }}
//                   >
//                     {/* FRONT */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         borderRadius: 20,
//                         overflow: "hidden",
//                         backgroundImage: `url(${s.image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <div
//                         style={{
//                           position: "absolute",
//                           inset: 0,
//                           background:
//                             "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
//                         }}
//                       />
//                       <div
//                         style={{
//                           position: "absolute",
//                           bottom: 24,
//                           left: 20,
//                           color: "#fff",
//                         }}
//                       >
//                         <h3>{s.title}</h3>
//                       </div>
//                     </div>

//                     {/* BACK */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         borderRadius: 20,
//                         background: "var(--secondary)",
//                         padding: 24,
//                         transform: "rotateY(180deg)",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <h3>{s.title}</h3>
//                       <ul style={{ paddingLeft: 18 }}>
//                         {s.points.map((p, idx) => (
//                           <li
//                             key={idx}
//                             style={{ cursor: "pointer", marginBottom: 8 }}
//                             onMouseEnter={() =>
//                               setDetailMode({
//                                 title: s.title,
//                                 image: s.image,
//                                 point: p.label,
//                                 detail: p.detail,
//                               })
//                             }
//                           >
//                             {p.label}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <style>{`
//                     .flip:hover {
//                       transform: rotateY(180deg);
//                     }
//                   `}</style>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ServicesGrid({
//   cardWidth = 320,
//   cardHeight = 300,
//   ratio = null,
// }) {
//   const [detailMode, setDetailMode] = useState(null);

//   const services = [
//     {
//       id: 1,
//       title: "Corporate & Business Advisory",
//       image: "/services/ss1.jpg",
//       points: [
//         {
//           label: "Corporate Strategy & Governance",
//           detail:
//             "We assist organizations in building robust governance structures and long-term corporate strategies.",
//         },
//         {
//           label: "Risk Advisory",
//           detail:
//             "Identification and mitigation of financial, operational, and regulatory risks.",
//         },
//         {
//           label: "Internal Audits & Process Reviews",
//           detail:
//             "Independent reviews to strengthen internal controls and operational efficiency.",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Tax & Regulatory Compliance",
//       image: "/services/ss5.jpg",
//       points: [
//         {
//           label: "Tax Planning & Filing",
//           detail:
//             "Structured tax planning and accurate filing aligned with prevailing laws.",
//         },
//         {
//           label: "Litigation Support",
//           detail:
//             "Representation and documentation support for assessments and appeals.",
//         },
//         {
//           label: "Regulatory Compliance",
//           detail:
//             "Complete management of statutory and regulatory compliance obligations.",
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "Financial Management & Reporting",
//       image: "/services/ss3.jpg",
//       points: [
//         {
//           label: "Financial Statements",
//           detail:
//             "Preparation and review of compliant and accurate financial statements.",
//         },
//         {
//           label: "Budgeting & Forecasting",
//           detail:
//             "Forward-looking financial planning to support business decisions.",
//         },
//         {
//           label: "Cash Flow Management",
//           detail:
//             "Optimizing liquidity and managing cash flows effectively.",
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "Forensic & Transactional Audit",
//       image: "/services/sss5.jpg",
//       points: [
//         {
//           label: "Fraud Detection",
//           detail:
//             "Investigative audits to detect and prevent financial fraud.",
//         },
//         {
//           label: "Due Diligence",
//           detail:
//             "Financial and operational due diligence for transactions.",
//         },
//         {
//           label: "Data Analytics",
//           detail:
//             "Advanced analytics to uncover patterns and irregularities.",
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "Sector-Specific Solutions",
//       image: "/services/ss2.jpg",
//       points: [
//         {
//           label: "Industrial Advisory",
//           detail:
//             "Customized advisory for manufacturing and industrial sectors.",
//         },
//         {
//           label: "Banking & Finance",
//           detail:
//             "Specialized services for banks and financial institutions.",
//         },
//         {
//           label: "Government & PSU",
//           detail:
//             "Compliance and advisory for government bodies and PSUs.",
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "Professional Services for CA / Finance Experts",
//       image: "/services/ss4.jpg",
//       points: [
//         {
//           label: "Advisory & Knowledge Sharing",
//           detail:
//             "Collaborative advisory and professional knowledge exchange.",
//         },
//         {
//           label: "Training Programs",
//           detail:
//             "Structured training and capacity-building programs.",
//         },
//         {
//           label: "Collaborative Compliance",
//           detail:
//             "Joint compliance support for professional practices.",
//         },
//       ],
//     },
//   ];

//   const computedHeight = ratio ? cardWidth * ratio : cardHeight;
//   const isDetailActive = Boolean(detailMode);

//   return (
//     <section className="section">
//       <div className="container">
//         <AnimatePresence mode="wait">
//           {isDetailActive ? (
//             <motion.div
//               key="detail"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               style={{ display: "flex", gap: 40 }}
//             >
//               {/* LEFT PANEL – ACTIVE CARD */}
//               <motion.div
//                 initial={{ x: 0 }}
//                 animate={{ x: -40 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: 0.1,
//                 }}
//                 style={{
//                   width: cardWidth,
//                   height: computedHeight,
//                   backgroundImage: `url(${detailMode.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   borderRadius: 20,
//                   position: "relative",
//                   boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
//                   padding: 20,
//                   color: "#fff",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                 }}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     borderRadius: 20,
//                     background:
//                       "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
//                   }}
//                 />

//                 <div style={{ position: "relative", zIndex: 2 }}>
//                   <h3 style={{ marginBottom: 12 }}>
//                     {detailMode.title}
//                   </h3>

//                   <ul style={{ listStyle: "none", padding: 0 }}>
//                     {detailMode.points.map((p) => {
//                       const isActive =
//                         p.label === detailMode.activePoint;

//                       return (
//                         <li
//                           key={p.label}
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: 10,
//                             marginBottom: 6,
//                             fontWeight: isActive ? 600 : 400,
//                             color: isActive ? "#f5c26b" : "#fff",
//                             transition: "all 0.3s ease",
//                           }}
//                         >
//                           {isActive && <span>→</span>}
//                           <span>{p.label}</span>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               </motion.div>

//               {/* RIGHT PANEL – DETAIL */}
//               <motion.div
//                 initial={{ x: 80, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: 80, opacity: 0 }}
//                 transition={{
//                   duration: 0.8,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: 0.25,
//                 }}
//                 style={{
//                   flex: 1,
//                   background: "var(--secondary)",
//                   borderRadius: 20,
//                   padding: 40,
//                   boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
//                 }}
//                 onMouseLeave={() => setDetailMode(null)}
//               >
//                 <h2>{detailMode.activePoint}</h2>
//                 <p style={{ lineHeight: 1.7 }}>
//                   {detailMode.detail}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ) : (
//             /* GRID VIEW (Stage-1 + Stage-2) */
//             <motion.div
//               key="grid"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: 32,
//               }}
//             >
//               {services.map((s) => (
//                 <motion.div
//                   key={s.id}
//                   whileHover={{ scale: 1.02 }}
//                   style={{
//                     width: cardWidth,
//                     height: computedHeight,
//                     perspective: 1200,
//                   }}
//                 >
//                   <div
//                     className="flip"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       position: "relative",
//                       transformStyle: "preserve-3d",
//                       transition: "transform 0.6s ease",
//                     }}
//                   >
//                     {/* FRONT */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         borderRadius: 20,
//                         overflow: "hidden",
//                         backgroundImage: `url(${s.image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <div
//                         style={{
//                           position: "absolute",
//                           inset: 0,
//                           background:
//                             "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
//                         }}
//                       />
//                       <div
//                         style={{
//                           position: "absolute",
//                           bottom: 24,
//                           left: 20,
//                           color: "#fff",
//                         }}
//                       >
//                         <h3>{s.title}</h3>
//                       </div>
//                     </div>

//                     {/* BACK */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         borderRadius: 20,
//                         background: "var(--secondary)",
//                         padding: 24,
//                         transform: "rotateY(180deg)",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <h3>{s.title}</h3>
//                       <ul style={{ paddingLeft: 18 }}>
//                         {s.points.map((p, idx) => (
//                           <li
//                             key={idx}
//                             style={{ cursor: "pointer", marginBottom: 8 }}
//                             onMouseEnter={() =>
//                               setDetailMode({
//                                 title: s.title,
//                                 image: s.image,
//                                 points: s.points,
//                                 activePoint: p.label,
//                                 detail: p.detail,
//                               })
//                             }
//                           >
//                             {p.label}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <style>{`
//                     .flip:hover {
//                       transform: rotateY(180deg);
//                     }
//                   `}</style>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Corporate & Business Advisory",
      image: "/services/ss1.jpg",
      points: [
        {
          label: "Corporate Strategy & Governance",
          detail:
            "We assist organizations in building robust governance structures and long-term corporate strategies.",
        },
        {
          label: "Risk Advisory",
          detail:
            "Identification and mitigation of financial, operational, and regulatory risks.",
        },
        {
          label: "Internal Audits & Process Reviews",
          detail:
            "Independent reviews to strengthen internal controls and operational efficiency.",
        },
      ],
    },

    {
      id: 2,
      title: "Tax & Regulatory Compliance",
      image: "/services/ss5.jpg",
      points: [
        {
          label: "Tax Planning & Filing",
          detail:
            "Structured tax planning and accurate filing aligned with prevailing laws.",
        },
        {
          label: "Litigation Support",
          detail:
            "Representation and documentation support for assessments and appeals.",
        },
        {
          label: "Regulatory Compliance",
          detail:
            "Complete management of statutory and regulatory compliance obligations.",
        },
      ],
    },

    {
      id: 3,
      title: "Financial Management & Reporting",
      image: "/services/ss3.jpg",
      points: [
        {
          label: "Financial Statements",
          detail:
            "Preparation and review of compliant and accurate financial statements.",
        },
        {
          label: "Budgeting & Forecasting",
          detail:
            "Forward-looking financial planning to support business decisions.",
        },
        {
          label: "Cash Flow Management",
          detail:
            "Optimizing liquidity and managing cash flows effectively.",
        },
      ],
    },

    {
      id: 4,
      title: "Forensic & Transactional Audit",
      image: "/services/sss5.jpg",
      points: [
        {
          label: "Fraud Detection",
          detail:
            "Investigative audits to detect and prevent financial fraud.",
        },
        {
          label: "Due Diligence",
          detail:
            "Financial and operational due diligence for transactions.",
        },
        {
          label: "Data Analytics",
          detail:
            "Advanced analytics to uncover patterns and irregularities.",
        },
      ],
    },

    {
      id: 5,
      title: "Sector-Specific Solutions",
      image: "/services/ss2.jpg",
      points: [
        {
          label: "Industrial Advisory",
          detail:
            "Customized advisory for manufacturing and industrial sectors.",
        },
        {
          label: "Banking & Finance",
          detail:
            "Specialized services for banks and financial institutions.",
        },
        {
          label: "Government & PSU",
          detail:
            "Compliance and advisory for government bodies and PSUs.",
        },
      ],
    },

    {
      id: 6,
      title: "Professional Services for CA / Finance Experts",
      image: "/services/ss4.jpg",
      points: [
        {
          label: "Advisory & Knowledge Sharing",
          detail:
            "Collaborative advisory and professional knowledge exchange.",
        },
        {
          label: "Training Programs",
          detail:
            "Structured training and capacity-building programs.",
        },
        {
          label: "Collaborative Compliance",
          detail:
            "Joint compliance support for professional practices.",
        },
      ],
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  const [focusedService, setFocusedService] = useState(null);

  const [activePoint, setActivePoint] = useState(null);

  const openFocusMode = (service, point) => {
    setFocusedService(service);
    setActivePoint(point);
  };

  const closeFocusMode = () => {
    setFocusedService(null);
    setActivePoint(null);
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* GRID */}
        <AnimatePresence mode="wait">
          {!focusedService && (
            <motion.div
              key="grid"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 26,
              }}
            >
              {services.map((service) => {
                const isHovered =
                  hoveredService?.id === service.id;

                return (
                  <motion.div
                    key={service.id}
                    layoutId={`service-card-${service.id}`}
                    onMouseEnter={() =>
                      setHoveredService(service)
                    }
                    onMouseLeave={() =>
                      setHoveredService(null)
                    }
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      position: "relative",
                      height: 320,
                      borderRadius: 26,
                      overflow: "hidden",
                      cursor: "pointer",
                      background: "#111",
                      boxShadow:
                        "0 18px 50px rgba(0,0,0,0.10)",
                    }}
                  >
                    {/* IMAGE */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.06 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* OVERLAY */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: isHovered
                          ? "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.28))"
                          : "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.14))",
                        transition: "0.3s ease",
                      }}
                    />

                    {/* CONTENT */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 2,
                        padding: 24,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        color: "#fff",
                      }}
                    >
                      <motion.h3
                        animate={{
                          y: isHovered ? -4 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        style={{
                          fontSize: 24,
                          lineHeight: 1.3,
                          marginBottom: 18,
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </motion.h3>

                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 18,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              y: 10,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                          >
                            <div
                              style={{
                                width: 55,
                                height: 2,
                                background: "#f5c26b",
                                marginBottom: 18,
                              }}
                            />

                            <ul
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {service.points.map((point) => (
                                <motion.li
                                  key={point.label}
                                  whileHover={{
                                    x: 6,
                                  }}
                                  transition={{
                                    duration: 0.2,
                                  }}
                                  onClick={() =>
                                    openFocusMode(
                                      service,
                                      point
                                    )
                                  }
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                    marginBottom: 12,
                                    padding:
                                      "12px 16px",
                                    borderRadius: 14,
                                    background:
                                      "rgba(255,255,255,0.10)",
                                    border:
                                      "1px solid rgba(255,255,255,0.12)",
                                    backdropFilter:
                                      "blur(10px)",
                                    cursor: "pointer",
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#f5c26b",
                                    }}
                                  >
                                    →
                                  </span>

                                  <span
                                    style={{
                                      fontSize: 14,
                                      lineHeight: 1.5,
                                    }}
                                  >
                                    {point.label}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOCUS MODE */}
        <AnimatePresence>
          {focusedService && (
            <motion.div
              key="focus-mode"
              initial={{
                opacity: 0,
                backdropFilter: "blur(0px)",
              }}
              animate={{
                opacity: 1,
                backdropFilter: "blur(10px)",
              }}
              exit={{
                opacity: 0,
                backdropFilter: "blur(0px)",
              }}
              transition={{
                duration: 0.35,
              }}
              style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100vh",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 30,
                background:
                  "rgba(0,0,0,0.45)",
              }}
            >
              {/* MAIN CARD */}
              <motion.div
                layoutId={`service-card-${focusedService.id}`}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  width: "100%",
                  maxWidth: 1080,
                  height: 620,
                  borderRadius: 30,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "0.95fr 1.05fr",
                  background: "#fff",
                  position: "relative",
                  boxShadow:
                    "0 40px 100px rgba(0,0,0,0.22)",
                }}
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={closeFocusMode}
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 24,
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    border: "none",
                    background:
                      "rgba(255,255,255,0.16)",
                    color: "#fff",
                    fontSize: 20,
                    cursor: "pointer",
                    zIndex: 50,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  ×
                </button>

                {/* LEFT SIDE */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {/* IMAGE */}
                  <motion.div
                    initial={{
                      scale: 1.08,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${focusedService.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* OVERLAY */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.28))",
                    }}
                  />

                  {/* LEFT CONTENT */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      padding: 36,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      color: "#fff",
                    }}
                  >
                    <motion.h2
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                      }}
                      style={{
                        fontSize: 34,
                        lineHeight: 1.25,
                        marginBottom: 22,
                        fontWeight: 700,
                      }}
                    >
                      {focusedService.title}
                    </motion.h2>

                    <div
                      style={{
                        width: 70,
                        height: 3,
                        background: "#f5c26b",
                        marginBottom: 24,
                      }}
                    />

                    {/* POINTS */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      {focusedService.points.map(
                        (point) => {
                          const isActive =
                            activePoint.label ===
                            point.label;

                          return (
                            <motion.div
                              key={point.label}
                              onMouseEnter={() =>
                                setActivePoint(point)
                              }
                              whileHover={{
                                x: 6,
                              }}
                              transition={{
                                duration: 0.2,
                              }}
                              style={{
                                padding:
                                  "14px 16px",
                                borderRadius: 14,
                                cursor: "pointer",
                                background:
                                  isActive
                                    ? "rgba(255,255,255,0.16)"
                                    : "rgba(255,255,255,0.08)",
                                border: isActive
                                  ? "1px solid rgba(255,255,255,0.20)"
                                  : "1px solid rgba(255,255,255,0.08)",
                                backdropFilter:
                                  "blur(10px)",
                                transition:
                                  "0.25s ease",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 10,
                                }}
                              >
                                <span
                                  style={{
                                    color:
                                      "#f5c26b",
                                  }}
                                >
                                  →
                                </span>

                                <span
                                  style={{
                                    fontSize: 15,
                                    lineHeight: 1.5,
                                    fontWeight:
                                      isActive
                                        ? 600
                                        : 400,
                                  }}
                                >
                                  {point.label}
                                </span>
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div
                  style={{
                    position: "relative",
                    padding: 50,
                    display: "flex",
                    alignItems: "center",
                    background:
                      "var(--secondary)",
                    overflowY: "auto",
                  }}
                >
                  {/* GLOW */}
                  <div
                    style={{
                      position: "absolute",
                      width: 260,
                      height: 260,
                      borderRadius: "50%",
                      background:
                        "rgba(245,194,107,0.10)",
                      top: -120,
                      right: -120,
                      filter: "blur(50px)",
                    }}
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePoint.label}
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.24,
                      }}
                      style={{
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding:
                            "10px 16px",
                          borderRadius: 999,
                          background:
                            "rgba(245,194,107,0.12)",
                          color: "#f5c26b",
                          fontWeight: 600,
                          fontSize: 13,
                          marginBottom: 24,
                        }}
                      >
                        {focusedService.title}
                      </div>

                      <h2
                        style={{
                          fontSize: 34,
                          lineHeight: 1.25,
                          marginBottom: 20,
                          color:
                            "var(--text-primary)",
                        }}
                      >
                        {activePoint.label}
                      </h2>

                      <p
                        style={{
                          fontSize: 16,
                          lineHeight: 1.9,
                          color:
                            "var(--text-secondary)",
                          maxWidth: 480,
                        }}
                      >
                        {activePoint.detail}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
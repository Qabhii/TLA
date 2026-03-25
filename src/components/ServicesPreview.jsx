


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




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesGrid({
  cardWidth = 320,
  cardHeight = 300,
  ratio = null,
}) {
  const [detailMode, setDetailMode] = useState(null);

  const services = [
    {
      id: 1,
      title: "Corporate & Business Advisory",
      image: "/services/corporate.jpg",
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
      image: "/services/tax.jpg",
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
      image: "/services/finance.jpg",
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
      image: "/services/forensic.jpg",
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
      image: "/services/sector.jpg",
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
      image: "/services/professionals.jpg",
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

  const computedHeight = ratio ? cardWidth * ratio : cardHeight;
  const isDetailActive = Boolean(detailMode);

  return (
    <section className="section">
      <div className="container">
        <AnimatePresence mode="wait">
          {isDetailActive ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", gap: 40 }}
            >
              {/* LEFT PANEL – ACTIVE CARD */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: -40 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                style={{
                  width: cardWidth,
                  height: computedHeight,
                  backgroundImage: `url(${detailMode.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 20,
                  position: "relative",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                  padding: 20,
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.25))",
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3 style={{ marginBottom: 12 }}>
                    {detailMode.title}
                  </h3>

                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {detailMode.points.map((p) => {
                      const isActive =
                        p.label === detailMode.activePoint;

                      return (
                        <li
                          key={p.label}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 6,
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? "#f5c26b" : "#fff",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {isActive && <span>→</span>}
                          <span>{p.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>

              {/* RIGHT PANEL – DETAIL */}
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25,
                }}
                style={{
                  flex: 1,
                  background: "var(--secondary)",
                  borderRadius: 20,
                  padding: 40,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
                }}
                onMouseLeave={() => setDetailMode(null)}
              >
                <h2>{detailMode.activePoint}</h2>
                <p style={{ lineHeight: 1.7 }}>
                  {detailMode.detail}
                </p>
              </motion.div>
            </motion.div>
          ) : (
            /* GRID VIEW (Stage-1 + Stage-2) */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 32,
              }}
            >
              {services.map((s) => (
                <motion.div
                  key={s.id}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    width: cardWidth,
                    height: computedHeight,
                    perspective: 1200,
                  }}
                >
                  <div
                    className="flip"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      transformStyle: "preserve-3d",
                      transition: "transform 0.6s ease",
                    }}
                  >
                    {/* FRONT */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 20,
                        overflow: "hidden",
                        backgroundImage: `url(${s.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 24,
                          left: 20,
                          color: "#fff",
                        }}
                      >
                        <h3>{s.title}</h3>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 20,
                        background: "var(--secondary)",
                        padding: 24,
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <h3>{s.title}</h3>
                      <ul style={{ paddingLeft: 18 }}>
                        {s.points.map((p, idx) => (
                          <li
                            key={idx}
                            style={{ cursor: "pointer", marginBottom: 8 }}
                            onMouseEnter={() =>
                              setDetailMode({
                                title: s.title,
                                image: s.image,
                                points: s.points,
                                activePoint: p.label,
                                detail: p.detail,
                              })
                            }
                          >
                            {p.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <style>{`
                    .flip:hover {
                      transform: rotateY(180deg);
                    }
                  `}</style>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

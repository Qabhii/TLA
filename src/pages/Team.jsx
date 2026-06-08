// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const sections = [
//   {
//     title: "Core Team",
//     members: [
//       { name: "CA Vishal", role: "Chartered Accountant" },
//       { name: "CA Shubham", role: "Chartered Accountant" },
//       { name: "CA Sahil", role: "Chartered Accountant" },
//       { name: "CA Atul", role: "Chartered Accountant" },
//       { name: "CA Harsh", role: "Chartered Accountant" },
//       { name: "CA Divyanshu", role: "Chartered Accountant" },
//       { name: "Akash", role: "Senior Associate" },
//       { name: "Tau", role: "Associate" },
//       { name: "Deepali", role: "Analyst" },
//       { name: "Vedika", role: "Analyst" }
//     ]
//   },

//   {
//     title: "Affiliate Partners",
//     members: [
//       { name: "Batra & Co.", role: "Affiliate Firm" },
//       { name: "Anivesh Consultants", role: "Affiliate Firm" },
//       { name: "Singh Arya & Associates", role: "Affiliate Firm" }
//     ]
//   },

//   {
//     title: "Interns",
//     members: [
//       { name: "Tanushree Singh", role: "Intern" },
//       { name: "Shatakshi", role: "Intern" },
//       { name: "Nivya", role: "Intern" },
//       { name: "Yovi", role: "Intern" },
//       { name: "Arham Ansari", role: "Intern" }
//     ]
//   },

//   {
//     title: "Technology Team",
//     members: [
//       { name: "Abhishek Singh", role: "Full Stack Developer" },
//       { name: "Subham", role: "Software Developer" }
//     ]
//   }
// ];

// export default function Team() {
//   return (
//     <>
//       <Header />

//       <main
//         style={{
//           background: "#f8f5f0",
//           minHeight: "100vh",
//           paddingTop: "140px",
//           paddingBottom: "120px"
//         }}
//       >
//         <div className="container">
//           <div
//             style={{
//               textAlign: "center",
//               marginBottom: "80px"
//             }}
//           >
//             <span
//               style={{
//                 color: "var(--accent)",
//                 fontWeight: 600,
//                 letterSpacing: "2px",
//                 textTransform: "uppercase"
//               }}
//             >
//               Our Team
//             </span>

//             <h1
//               style={{
//                 fontSize: "clamp(48px,7vw,88px)",
//                 marginTop: "20px",
//                 marginBottom: "20px",
//                 fontFamily: "var(--font-serif)"
//               }}
//             >
//               Meet Our Professionals
//             </h1>

//             <p
//               style={{
//                 maxWidth: "760px",
//                 margin: "0 auto",
//                 lineHeight: 1.8,
//                 color: "hsl(30,10%,35%)"
//               }}
//             >
//               A dedicated group of Chartered Accountants,
//               analysts, affiliate partners, interns and
//               technology professionals working together
//               to deliver exceptional service.
//             </p>
//           </div>

//           {sections.map((section) => (
//             <section
//               key={section.title}
//               style={{ marginBottom: "90px" }}
//             >
//               <h2
//                 style={{
//                   fontSize: "38px",
//                   marginBottom: "30px",
//                   fontFamily: "var(--font-serif)"
//                 }}
//               >
//                 {section.title}
//               </h2>

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns:
//                     "repeat(auto-fit,minmax(280px,1fr))",
//                   gap: "24px"
//                 }}
//               >
//                 {section.members.map((member) => (
//                   <div
//                     key={member.name}
//                     style={{
//                       background: "white",
//                       borderRadius: "24px",
//                       padding: "28px",
//                       border:
//                         "1px solid rgba(0,0,0,0.06)",
//                       transition: "0.25s ease"
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: "70px",
//                         height: "70px",
//                         borderRadius: "50%",
//                         background:
//                           "linear-gradient(135deg,#232946,#6c7280)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "#fff",
//                         fontWeight: "700",
//                         fontSize: "24px",
//                         marginBottom: "20px"
//                       }}
//                     >
//                       {member.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")
//                         .substring(0, 2)}
//                     </div>

//                     <h3>{member.name}</h3>

//                     <p
//                       style={{
//                         color: "hsl(30,10%,35%)"
//                       }}
//                     >
//                       {member.role}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </>
//   );
// }


import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ─────────────────────────────────────────────────────────────
// DATA — edit name, role, photo (import path or URL), and bio here
// ─────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    id: "core",
    title: "Core Team",
    icon: "👥",
    members: [
      {
        name: "CA Vishal",
        role: "Chartered Accountant",
        photo: null, // e.g. import vishalImg from "../assets/team/vishal.jpg" and put vishalImg here
        bio: "Chartered Accountant with expertise in direct taxation, statutory audits and corporate advisory. Leads client engagements across manufacturing and services sectors.",
      },
      {
        name: "CA Shubham",
        role: "Chartered Accountant",
        photo: null,
        bio: "Specialises in GST compliance, transfer pricing and international taxation. Experienced in handling complex assessments before revenue authorities.",
      },
      {
        name: "CA Sahil",
        role: "Chartered Accountant",
        photo: null,
        bio: "Focuses on internal audits, risk advisory and internal financial controls. Works closely with mid-sized enterprises on process improvement mandates.",
      },
      {
        name: "CA Atul",
        role: "Chartered Accountant",
        photo: null,
        bio: "Handles corporate law matters, ROC filings and FEMA compliance. Advises clients on structuring transactions and regulatory approvals.",
      },
      {
        name: "CA Harsh",
        role: "Chartered Accountant",
        photo: null,
        bio: "Expert in financial due diligence, M&A advisory and valuation engagements. Brings strong analytical skills to complex business restructuring assignments.",
      },
      {
        name: "CA Divyanshu",
        role: "Chartered Accountant",
        photo: null,
        bio: "Manages outsourced accounting, payroll and MIS reporting for a portfolio of domestic and international clients. Proficient in Tally, SAP and Zoho Books.",
      },
      {
        name: "Akash",
        role: "Senior Associate",
        photo: null,
        bio: "Senior associate handling day-to-day client compliance, TDS filings and GST return management across a wide range of industries.",
      },
      {
        name: "Tau",
        role: "Associate",
        photo: null,
        bio: "Associate supporting audit engagements, vouching and verification assignments under the supervision of senior team members.",
      },
      {
        name: "Deepali",
        role: "Analyst",
        photo: null,
        bio: "Analyst responsible for data reconciliation, financial statement preparation and client MIS reporting on a monthly basis.",
      },
      {
        name: "Vedika",
        role: "Analyst",
        photo: null,
        bio: "Analyst assisting with GST workings, tax computations and compliance trackers. Keen interest in direct tax research and advisory.",
      },
    ],
  },
  {
    id: "partners",
    title: "Affiliate Partners",
    icon: "🏛️",
    members: [
      {
        name: "Batra & Co.",
        role: "Affiliate Firm",
        photo: null,
        bio: "A reputed CA firm with deep expertise in tax litigation, appellate proceedings and representation before ITAT. Long-standing affiliate bringing specialist expertise on contested matters.",
      },
      {
        name: "Anivesh Consultants",
        role: "Affiliate Firm",
        photo: null,
        bio: "Boutique consultancy specialising in SEBI compliance, capital markets advisory and listed-entity regulatory filings. Trusted affiliate for capital market mandates.",
      },
      {
        name: "Singh Arya & Associates",
        role: "Affiliate Firm",
        photo: null,
        bio: "Full-service law firm with strong corporate, commercial and employment law practice. Collaborates on cross-disciplinary engagements requiring integrated legal and financial advisory.",
      },
    ],
  },
  {
    id: "interns",
    title: "Interns",
    icon: "🎓",
    members: [
      {
        name: "Tanushree Singh",
        role: "Intern",
        photo: null,
        bio: "CA articleship intern assisting with audit documentation, working paper preparation and client data analysis.",
      },
      {
        name: "Shatakshi",
        role: "Intern",
        photo: null,
        bio: "Pursuing CA Foundation; supports the compliance team with GST data entry, reconciliations and return preparation.",
      },
      {
        name: "Nivya",
        role: "Intern",
        photo: null,
        bio: "Intern with the taxation team, assisting on TDS computations, advance tax workings and basic litigation support.",
      },
      {
        name: "Yovi",
        role: "Intern",
        photo: null,
        bio: "Commerce graduate intern contributing to bookkeeping, bank reconciliations and financial data management tasks.",
      },
      {
        name: "Arham Ansari",
        role: "Intern",
        photo: null,
        bio: "Intern supporting the corporate law and MCA filing team with drafting, document verification and ROC compliance activities.",
      },
    ],
  },
  {
    id: "tech",
    title: "Technology Team",
    icon: "💻",
    members: [
      {
        name: "Abhishek Singh",
        role: "Full Stack Developer",
        photo: null,
        bio: "Builds and maintains the firm's internal web portals, client-facing tools and automated compliance workflows. Works across React, Node.js and MongoDB.",
      },
      {
        name: "Subham",
        role: "Software Developer",
        photo: null,
        bio: "Supports development of internal dashboards, data pipelines and automation scripts that streamline routine compliance and reporting tasks.",
      },
    ],
  },
];

// ─── Helper ──────────────────────────────────────────────────
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

// ─── MemberCard ──────────────────────────────────────────────
function MemberCard({ member }) {
  return (
    <article style={styles.card}>
      {/* Photo or initials */}
      <div style={styles.photoBox}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
          />
        ) : (
          <div style={styles.initialsCircle}>{getInitials(member.name)}</div>
        )}
      </div>

      {/* Name & role */}
      <div style={styles.memberName}>{member.name}</div>
      <div style={styles.roleTag}>{member.role}</div>
      <hr style={styles.divider} />

      {/* Bio */}
      <p style={styles.bioText}>{member.bio}</p>
    </article>
  );
}

// ─── Team Page ───────────────────────────────────────────────
export default function Team() {
  const [activeIdx, setActiveIdx] = useState(0);
  const section = SECTIONS[activeIdx];

  return (
    <>
      <Header />

      <main style={{ background: "#f8f5f0", minHeight: "100vh", paddingTop: "140px", paddingBottom: "120px" }}>
        <div className="container">

          {/* Hero */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", fontSize: "12px" }}>
              Our Team
            </span>
            <h1 style={{ fontSize: "clamp(40px,6vw,80px)", marginTop: "20px", marginBottom: "20px", fontFamily: "var(--font-serif)" }}>
              Meet Our Professionals
            </h1>
            <p style={{ maxWidth: "680px", margin: "0 auto", lineHeight: 1.8, color: "hsl(30,10%,38%)", fontSize: "16px" }}>
              A dedicated group of Chartered Accountants, analysts, affiliate partners, interns
              and technology professionals working together to deliver exceptional service.
            </p>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Team sections"
            style={{
              display: "flex",
              gap: "4px",
              flexWrap: "wrap",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginBottom: "40px",
            }}
          >
            {SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === activeIdx}
                aria-controls={`panel-${s.id}`}
                id={`tab-${s.id}`}
                onClick={() => setActiveIdx(i)}
                style={{
                  padding: "12px 22px",
                  fontSize: "14px",
                  fontWeight: i === activeIdx ? 600 : 400,
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  color: i === activeIdx ? "#1a0808" : "hsl(30,8%,48%)",
                  borderBottom: `2px solid ${i === activeIdx ? "#8B1A1A" : "transparent"}`,
                  marginBottom: "-1px",
                  transition: "all 0.18s",
                  fontFamily: "inherit",
                }}
              >
                <span aria-hidden="true" style={{ marginRight: "8px" }}>{s.icon}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Section panel */}
          <section
            id={`panel-${section.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${section.id}`}
          >
            <h2 style={{ fontSize: "34px", marginBottom: "28px", fontFamily: "var(--font-serif)", fontWeight: 600 }}>
              {section.title}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "20px",
                alignItems: "start",
              }}
            >
              {section.members.map((member, i) => (
                <MemberCard key={`${section.id}-${i}`} member={member} />
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

// ─── Styles ──────────────────────────────────────────────────
const styles = {
  card: {
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    border: "1px solid rgba(0,0,0,0.07)",
    display: "flex",
    flexDirection: "column",
  },

  photoBox: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "14px",
    background: "#f5f1eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
    overflow: "hidden",
  },

  initialsCircle: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#232946,#6c7280)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: "24px",
  },

  memberName: {
    fontSize: "15px",
    fontWeight: 600,
    fontFamily: "var(--font-serif, Georgia, serif)",
    color: "#1a0808",
    marginBottom: "4px",
  },

  roleTag: {
    fontSize: "11px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    color: "#8B1A1A",
    fontWeight: 600,
    marginBottom: "14px",
  },

  divider: {
    border: "none",
    borderTop: "1px solid rgba(0,0,0,0.07)",
    marginBottom: "14px",
  },

  bioText: {
    fontSize: "13px",
    lineHeight: 1.75,
    color: "hsl(30,8%,35%)",
    margin: 0,
  },
};
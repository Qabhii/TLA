import Header from "../components/Header";
import Footer from "../components/Footer";

const EFFECTIVE_DATE = "1 June 2025";
const FIRM_NAME = "TrustLeaf Advisors LLP";
const FIRM_ADDRESS =
  "1/5871 (old Number 1/630), Kabool Nagar, Tikona Park, Shahdara, Delhi – 110032, India";
const CONTACT_EMAIL = "contact@trustleafadvisors.in";
const CONTACT_PHONE = "+91 78306 67096";

// ─── Section wrapper ──────────────────────────────────────────
function Section({ number, title, children }) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "22px",
          fontWeight: 600,
          color: "#1a0808",
          marginBottom: "16px",
          display: "flex",
          alignItems: "baseline",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontFamily: "inherit",
            color: "#8B1A1A",
            fontWeight: 700,
            letterSpacing: "1px",
            minWidth: "28px",
          }}
        >
          {number}.
        </span>
        {title}
      </h2>
      <div
        style={{
          paddingLeft: "40px",
          fontSize: "15px",
          lineHeight: 1.85,
          color: "hsl(30,8%,28%)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

// ─── Bullet list ──────────────────────────────────────────────
function BulletList({ items }) {
  return (
    <ul
      style={{
        margin: "12px 0",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {items.map((item, i) => (
        <li key={i} style={{ lineHeight: 1.75 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Sub-heading inside a section ────────────────────────────
function SubHead({ children }) {
  return (
    <p
      style={{
        fontWeight: 600,
        color: "#1a0808",
        marginTop: "20px",
        marginBottom: "6px",
        fontSize: "15px",
      }}
    >
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#f8f5f0",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "120px",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>

          {/* Page header */}
          <div style={{ marginBottom: "56px" }}>
            <span
              style={{
                color: "#8B1A1A",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Legal
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 600,
                marginTop: "16px",
                marginBottom: "20px",
                color: "#1a0808",
                lineHeight: 1.15,
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ fontSize: "15px", color: "hsl(30,8%,40%)", lineHeight: 1.7 }}>
              Effective Date: <strong>{EFFECTIVE_DATE}</strong> &nbsp;·&nbsp; {FIRM_NAME}
            </p>
            <div
              style={{
                marginTop: "28px",
                padding: "18px 24px",
                background: "#fff",
                border: "1px solid rgba(139,26,26,0.12)",
                borderLeft: "4px solid #8B1A1A",
                borderRadius: "0 12px 12px 0",
                fontSize: "14px",
                lineHeight: 1.75,
                color: "hsl(30,8%,35%)",
              }}
            >
              This Privacy Policy describes how <strong>{FIRM_NAME}</strong> ("we", "us",
              "our") collects, uses, stores, discloses and protects personal information
              obtained from clients, website visitors and other individuals who interact
              with us. We are committed to safeguarding your privacy and handling your
              data with transparency and integrity, in accordance with applicable Indian
              laws including the Information Technology Act, 2000, the Information
              Technology (Reasonable Security Practices and Procedures and Sensitive
              Personal Data or Information) Rules, 2011, and applicable provisions of
              the Digital Personal Data Protection Act, 2023.
            </div>
          </div>

          {/* Divider */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              marginBottom: "56px",
            }}
          />

          {/* ── Sections ── */}

          <Section number="1" title="Information We Collect">
            <p>
              We collect information that is necessary to provide professional
              accounting, taxation, audit and advisory services. The categories of
              personal information we may collect include:
            </p>
            <SubHead>1.1 Information you provide directly</SubHead>
            <BulletList
              items={[
                "Full legal name, date of birth, gender and nationality",
                "Permanent Account Number (PAN), Aadhaar number, GST Identification Number (GSTIN) and other government-issued identifiers",
                "Contact details including postal address, telephone number and email address",
                "Financial information such as income details, bank account information, investment records and tax returns",
                "Business-related documents including incorporation certificates, financial statements, board resolutions and agreements",
                "Identity and address proof documents submitted for KYC purposes",
                "Communication records including emails, letters and meeting notes exchanged with our team",
              ]}
            />
            <SubHead>1.2 Information collected automatically</SubHead>
            <BulletList
              items={[
                "IP address, browser type, operating system and device identifiers when you visit our website",
                "Pages viewed, time spent on pages and referring URLs",
                "Cookies and similar tracking technologies (see Section 9)",
              ]}
            />
            <SubHead>1.3 Information received from third parties</SubHead>
            <BulletList
              items={[
                "Information shared by associate firms, referral partners or joint engagement teams",
                "Publicly available information from government databases, the Ministry of Corporate Affairs portal, Income Tax e-filing portal and similar regulatory repositories",
              ]}
            />
          </Section>

          <Section number="2" title="How We Use Your Information">
            <p>
              We use the information we collect solely for legitimate professional and
              operational purposes. Specifically, we use your information to:
            </p>
            <BulletList
              items={[
                "Provide, manage and deliver professional services including accounting, tax compliance, audit, advisory and legal support",
                "Prepare and file returns, reports, forms and documents with government authorities on your behalf",
                "Verify your identity and comply with Know Your Client (KYC) obligations",
                "Communicate with you regarding service updates, deadlines, regulatory changes and engagement-related matters",
                "Issue invoices, process payments and maintain financial records",
                "Comply with applicable laws, regulations, court orders, and requests from statutory authorities",
                "Maintain and improve the security and functionality of our internal systems and website",
                "Respond to your queries, complaints and feedback",
                "Fulfil any other purpose for which you have provided explicit consent",
              ]}
            />
            <p style={{ marginTop: "14px" }}>
              We do not use your personal information for any automated decision-making
              or profiling that produces legal or similarly significant effects on you.
            </p>
          </Section>

          <Section number="3" title="Legal Basis for Processing">
            <p>
              Our processing of your personal data rests on one or more of the
              following legal bases:
            </p>
            <BulletList
              items={[
                "Performance of a contract: Processing is necessary to deliver the professional services you have engaged us for.",
                "Legal obligation: Processing is required to comply with our obligations under the Income Tax Act, GST laws, Companies Act, PMLA, and other applicable statutes.",
                "Legitimate interests: Processing is necessary for our legitimate business interests, such as improving service quality and maintaining internal records, provided these interests are not overridden by your rights.",
                "Consent: Where we rely on your consent (e.g. for marketing communications), you may withdraw it at any time by contacting us.",
              ]}
            />
          </Section>

          <Section number="4" title="Disclosure of Your Information">
            <p>
              We treat client information as strictly confidential. We do not sell,
              rent or trade your personal information to any third party. We may
              disclose your information only in the following circumstances:
            </p>
            <SubHead>4.1 With your consent</SubHead>
            <p>
              We share information where you have given us explicit written or
              electronic consent to do so.
            </p>
            <SubHead>4.2 Service providers and professional associates</SubHead>
            <p>
              We may share information with affiliate firms, co-auditors, legal
              counsel and technology service providers who assist us in delivering
              services. All such parties are bound by confidentiality obligations
              no less stringent than those in this Policy.
            </p>
            <SubHead>4.3 Regulatory and statutory authorities</SubHead>
            <BulletList
              items={[
                "Income Tax Department of India",
                "Goods and Services Tax Network (GSTN)",
                "Ministry of Corporate Affairs (MCA)",
                "Securities and Exchange Board of India (SEBI)",
                "Registrar of Companies (ROC)",
                "Any other authority with lawful jurisdiction",
              ]}
            />
            <SubHead>4.4 Legal proceedings</SubHead>
            <p>
              We may disclose information when required by a court of competent
              jurisdiction, law enforcement authority, or where disclosure is
              necessary to protect our legal rights or the safety of any person.
            </p>
            <SubHead>4.5 Business transfers</SubHead>
            <p>
              In the event of a merger, acquisition, restructuring or transfer of our
              practice, client information may be disclosed to the acquiring entity,
              subject to equivalent confidentiality protections.
            </p>
          </Section>

          <Section number="5" title="Data Retention">
            <p>
              We retain your personal information for as long as is necessary to
              fulfil the purposes outlined in this Policy and to comply with our
              legal and professional obligations. In particular:
            </p>
            <BulletList
              items={[
                "Tax and financial records are retained for a minimum of 8 years from the relevant assessment year, as required under the Income Tax Act, 1961.",
                "Audit working papers and related client files are retained for a minimum of 7 years in accordance with the Institute of Chartered Accountants of India (ICAI) guidelines.",
                "Company law-related documents are retained in accordance with the Companies Act, 2013.",
                "Website visitor data and server logs are retained for up to 12 months.",
                "Records subject to an ongoing dispute or litigation are retained until the matter is resolved.",
              ]}
            />
            <p style={{ marginTop: "14px" }}>
              Upon expiry of applicable retention periods, data is securely deleted
              or anonymised in a manner that prevents reconstruction.
            </p>
          </Section>

          <Section number="6" title="Data Security">
            <p>
              We implement reasonable technical, administrative and physical safeguards
              to protect personal information against unauthorised access, disclosure,
              alteration or destruction. Our security measures include:
            </p>
            <BulletList
              items={[
                "Encryption of sensitive data in transit using TLS/SSL protocols",
                "Role-based access controls limiting data access to authorised personnel only",
                "Password-protected systems and multi-factor authentication for critical applications",
                "Regular internal audits of data handling practices",
                "Secure disposal of physical documents containing personal information",
                "Staff training on data confidentiality and information security practices",
              ]}
            />
            <p style={{ marginTop: "14px" }}>
              While we take all reasonable precautions, no method of transmission over
              the internet or electronic storage is completely secure. We cannot
              guarantee absolute security but are committed to promptly addressing
              any breach in accordance with applicable law.
            </p>
          </Section>

          <Section number="7" title="Your Rights">
            <p>
              Subject to applicable law, you have the following rights with respect
              to your personal information:
            </p>
            <BulletList
              items={[
                "Right of access: You may request a copy of the personal information we hold about you.",
                "Right to correction: You may request that we correct inaccurate or incomplete information.",
                "Right to erasure: You may request deletion of your data where it is no longer necessary for the purposes for which it was collected, subject to our legal retention obligations.",
                "Right to restrict processing: You may request that we limit our use of your data in certain circumstances.",
                "Right to data portability: You may request that we provide your data in a structured, commonly used format.",
                "Right to object: You may object to processing based on legitimate interests.",
                "Right to withdraw consent: Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.",
              ]}
            />
            <p style={{ marginTop: "14px" }}>
              To exercise any of these rights, please contact us using the details
              in Section 11. We will respond to your request within 30 days. We may
              need to verify your identity before fulfilling your request.
            </p>
          </Section>

          <Section number="8" title="Transfer of Data Outside India">
            <p>
              Our primary operations are based in India and most data is stored and
              processed within India. Where data is transferred outside India (for
              example, through cloud service providers with servers abroad), we ensure
              adequate safeguards are in place, including contractual protections
              consistent with applicable Indian data protection requirements.
            </p>
          </Section>

          <Section number="9" title="Cookies and Website Tracking">
            <p>
              Our website may use cookies and similar technologies to enhance your
              browsing experience and collect usage data. Types of cookies we may use:
            </p>
            <BulletList
              items={[
                "Essential cookies: Necessary for the website to function and cannot be disabled.",
                "Analytics cookies: Help us understand how visitors interact with our website (e.g. Google Analytics). Data is aggregated and anonymised.",
                "Preference cookies: Remember your choices and settings for a better experience.",
              ]}
            />
            <p style={{ marginTop: "14px" }}>
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect the functionality of the website.
              We do not use cookies for advertising or cross-site tracking.
            </p>
          </Section>

          <Section number="10" title="Third-Party Links">
            <p>
              Our website may contain links to external websites, government portals
              (such as the Income Tax e-filing portal or MCA21) or other third-party
              platforms. We are not responsible for the privacy practices or content
              of those websites. We encourage you to review the privacy policies of
              any third-party sites you visit.
            </p>
          </Section>

          <Section number="11" title="Contact Us — Privacy Queries">
            <p>
              If you have any questions, concerns or complaints regarding this Privacy
              Policy or our handling of your personal information, or if you wish to
              exercise any of your rights, please contact our designated Privacy
              Officer:
            </p>
            <div
              style={{
                marginTop: "20px",
                padding: "20px 24px",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "14px",
                fontSize: "14px",
                lineHeight: 2,
              }}
            >
              <strong>{FIRM_NAME}</strong>
              <br />
              {FIRM_ADDRESS}
              <br />
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#8B1A1A", textDecoration: "none" }}
              >
                {CONTACT_EMAIL}
              </a>
              <br />
              Phone:{" "}
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                style={{ color: "#8B1A1A", textDecoration: "none" }}
              >
                {CONTACT_PHONE}
              </a>
            </div>
            <p style={{ marginTop: "16px" }}>
              We will acknowledge your request within 5 business days and endeavour
              to resolve it within 30 days. If you are not satisfied with our
              response, you may approach the appropriate data protection authority
              under applicable Indian law.
            </p>
          </Section>

          <Section number="12" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes
              in law, technology or our business practices. The revised Policy will
              be posted on this page with an updated effective date. Where changes
              are material, we will notify you by email or by a prominent notice on
              our website prior to the change taking effect. Your continued use of
              our services after the effective date constitutes acceptance of the
              revised Policy.
            </p>
            <p style={{ marginTop: "14px" }}>
              We recommend reviewing this page periodically to stay informed about
              how we protect your information.
            </p>
          </Section>

          {/* Footer note */}
          <div
            style={{
              marginTop: "56px",
              padding: "20px 24px",
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "14px",
              fontSize: "13px",
              lineHeight: 1.75,
              color: "hsl(30,8%,45%)",
              textAlign: "center",
            }}
          >
            This Privacy Policy was last reviewed and updated on{" "}
            <strong>{EFFECTIVE_DATE}</strong>. &copy; {new Date().getFullYear()}{" "}
            {FIRM_NAME}. All rights reserved.
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
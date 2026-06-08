export default function TeamCard({ name, role }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "28px",
        border: "1px solid rgba(0,0,0,0.08)",
        transition: "all 0.25s ease",
        minHeight: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 15px 40px rgba(0,0,0,0.08)";
        e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor =
          "rgba(0,0,0,0.08)";
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#1f2937,#6b7280)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        {initials}
      </div>

      {/* Name */}
      <h3
        style={{
          margin: 0,
          fontSize: "22px",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "8px",
        }}
      >
        {name}
      </h3>

      {/* Role */}
      <p
        style={{
          margin: 0,
          color: "#6b7280",
          fontSize: "16px",
          lineHeight: 1.6,
        }}
      >
        {role}
      </p>
    </div>
  );
}
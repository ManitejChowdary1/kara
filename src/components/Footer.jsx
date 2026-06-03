import logo from "../assets/logo.png";

/**
 * Universal Footer component displaying the brand presence and copyright.
 */
function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
        <img src={logo} alt="KARA Logo" style={{ height: "35px", width: "auto", borderRadius: "6px" }} />
        <div className="footer-logo" style={{ margin: 0 }}>
          KARA<span> EVENTS</span>
        </div>
      </div>
      {/* professional Social Links Row */}
      <div style={{ margin: "10px 0 15px 0", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
        {/* Founder Link */}
        <a
          href="https://www.instagram.com/elseboutiqueongole?igsh=MWY5YjNrNmxmcTZzNg=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "0.78rem",
            fontWeight: "500",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            padding: "6px 16px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(255, 255, 255, 0.03)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--accent-light)';
            e.currentTarget.style.background = 'rgba(217, 121, 41, 0.08)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
          }}
        >
          <svg style={{ width: "13px", height: "13px", fill: "currentColor" }} viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Founder: Else Boutique
        </a>

        {/* Co-Founder Link */}
        <a
          href="https://www.instagram.com/bheemas_sagar_photography?igsh=bWF6bmMzcWxhcmRq&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "0.78rem",
            fontWeight: "500",
            letterSpacing: "1px",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            padding: "6px 16px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(255, 255, 255, 0.03)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = 'var(--accent-light)';
            e.currentTarget.style.background = 'rgba(217, 121, 41, 0.08)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-muted)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
          }}
        >
          <svg style={{ width: "13px", height: "13px", fill: "currentColor" }} viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Co-Founder: Bheemas Sagar
        </a>
      </div>

      {/* bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        marginTop: "15px",
        paddingTop: "10px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }} className="footer-bottom-bar">
        <p className="footer-copy" style={{ margin: 0, textAlign: "center" }}>
          © 2026 Kara Events • Wedding Expo Ongole • All Rights Reserved
        </p>
        <p style={{
          margin: 0,
          position: "absolute",
          right: "0",
          fontSize: "0.78rem",
          color: "var(--text-muted)",
          opacity: 0.65,
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: "500"
        }} className="footer-dev-credit">
          Developed by <span style={{ color: "#fff", fontWeight: "600" }}>Team Nextus</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

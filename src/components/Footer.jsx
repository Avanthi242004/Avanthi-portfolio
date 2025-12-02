// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Made with <span style={{ color: "#ef4444" }}>❤️</span> by Avanthi · ©{" "}
        {year}
      </p>
    </footer>
  );
}

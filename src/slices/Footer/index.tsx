const Footer = ({ slice }: any) => (
  <footer style={{ background: "#1B263B", color: "white", padding: "3rem 2.5rem", textAlign: "center" }}>
    <p style={{ marginBottom: "1rem" }}>{slice?.primary?.copyright || "© 2026 Request"}</p>
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
      {(slice?.items || []).map((item: any, i: number) => (
        <a key={i} href={item?.link?.url || "#"} style={{ color: "#FF4D7F", textDecoration: "none" }}>{item?.label}</a>
      ))}
    </div>
  </footer>
);

export default Footer;

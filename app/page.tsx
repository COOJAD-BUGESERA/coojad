export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        background: "#111",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 8vw, 5rem)", fontWeight: 600 }}>
        WEBSITE down
      </h1>
    </main>
  );
}

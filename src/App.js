
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: '4rem' }}>LOOTCLUB</h1>
      <p style={{ fontSize: '1.2rem' }}>Benvenuto nella tua community gaming</p>
    </div>
  );
}
export default App;

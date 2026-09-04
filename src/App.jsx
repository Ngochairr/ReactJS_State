import Header from "./components/Header";
import Glasses from "./components/Glasses";

function App() {
  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage: "url('/glassesImage/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Glasses />
    </div>
  );
}

export default App;
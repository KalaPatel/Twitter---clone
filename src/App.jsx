import "./App.css";
import { useRef } from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  const headerNavRef = useRef(null);
  return (
    <div className="App">
      <div ref={headerNavRef}>
        <Header />
      </div>
      <Content refProp={headerNavRef} />
      <Footer />
    </div>
  );
}

export default App;

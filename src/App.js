import "./App.css";
import HomePage from "./pages/HomePage";
import StartingPage from "./pages/StartingPage";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [afterAnim, setAfterAnim] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      {!afterAnim && <StartingPage setAfterAnim={setAfterAnim} />}
      {afterAnim && <HomePage />}
    </div>
  );
}

export default App;

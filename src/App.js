import "./App.css";
import HomePage from "./pages/HomePage";
import StartingPage from "./pages/StartingPage";
import { useState } from "react";

function App() {
  const [afterAnim, setAfterAnim] = useState(false);
  return (
    <div className="w-max-screen h-max-screen flex flex-col w-screen h-screen overflow-hidden">
      {!afterAnim && <StartingPage afterAnim={afterAnim} setAfterAnim={ setAfterAnim } />}
      {afterAnim && <HomePage />}  
    </div>
  );
}

export default App;

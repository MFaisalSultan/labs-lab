import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouting from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  );
}

export default App;

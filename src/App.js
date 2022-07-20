import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
  );
}

export default App;

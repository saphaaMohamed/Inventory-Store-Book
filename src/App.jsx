import { Layouts } from "./components/Layouts"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ContectUs from "./Pages/ContectUs";

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/ContectUS" element={<ContectUs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

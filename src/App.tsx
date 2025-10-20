import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from './pages/Events/Events'
import './App.css'
// import Contact from "./pages/contact/Contact";
// import Schedule from "./pages/schedule/Schedule";
// import ScrollToTop from "./Components/ScrollToTop";



function App() {
  return (
    <>
      <Router>
      {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs/*" element={<Blogs />} /> */}
          <Route path="/events/*" element={<Events />} />
          {/* <Route path="/get-involved" element={<Get-Involved />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} /> */} 
        </Routes>
      </Router>
    </>
  );
}

export default App;

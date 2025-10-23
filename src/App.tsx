import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect } from "react"; 
import Aos from "aos"; 
import "aos/dist/aos.css"; // Import Aos styles
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs"
import Events from './pages/Events/Events'
import GetInvolved from "./pages/Get-Involved/Get-Involved";
import Team from './pages/Team/Team' 
import About from "./pages/About/AboutPage"; 
import './App.css'
import ScrollToTop from "./Components/ScrollToTop";



function App() {

  // Initialize AOS once for the entire application
  useEffect(() => {
    Aos.init({
      duration: 1000,
      anchorPlacement: "top-bottom", // This fixes the "pop-in"
      disable: "phone",
      startEvent: "DOMContentLoaded",
      easing: "ease-out",
      mirror: true,
    });
  }, []);

  return (
    <>
      <Router>
      {<ScrollToTop />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/*" element={<Blogs />} />
          <Route path="/events/*" element={<Events />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/team" element={<Team />} /> {/* Add Team Route */}
          <Route path="/about" element={<About />} /> {/* Add About Route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
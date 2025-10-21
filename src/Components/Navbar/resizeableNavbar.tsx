import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header
        className="py-8 px-4 md:px-28 w-full linear-bg font-kodeMono"
      >
        <div className="flex flex-row justify-between items-center container mx-auto ">
          <Link to="/">
            <img src="/common/logo.png" className="h-28" alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-2xl" onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>

          <div className="hidden md:flex font-semibold items-center md:space-x-14 large:space-x-16">
            <Link
              to="/"
              className="text-white hover:text-secondary underline-animate text-2xl relative inline-block"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Blogs
            </Link>

            <Link
              to="/events"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Events
            </Link>

            <Link
              to="/get-involved"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Get Involved
            </Link>

            
             <Link
              to="/team"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              Team
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-secondary text-2xl underline-animate relative inline-block"
            >
              About
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
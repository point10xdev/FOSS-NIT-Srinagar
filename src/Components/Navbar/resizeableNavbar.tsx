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
        // Add relative positioning and a high z-index to keep the header on top
        className="py-8 px-4 md:px-28 w-full linear-bg font-kodeMono relative z-50"
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

          {/* Desktop Menu */}
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

      {/* --- UPDATED MOBILE SIDEBAR --- */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen
          bg-[#0c0c0c]  {/* CHANGED: Use the theme's dark gray color */}
          font-kodeMono 
          z-40  {/* Positioned under the header (z-50) */}
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          flex flex-col items-center justify-center space-y-8
        `}
      >
        {/* Links for the mobile menu */}
        <Link
          to="/"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          Home
        </Link>
        <Link
          to="/blogs"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          Blogs
        </Link>
        <Link
          to="/events"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          Events
        </Link>
        <Link
          to="/get-involved"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          Get Involved
        </Link>
        <Link
          to="/team"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          Team
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-secondary text-3xl"
          onClick={toggleSidebar}
        >
          About
        </Link>
      </div>
    </>
  );
};

export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return (
    <div className="py-2">
      <div className="mx-auto">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center ml-0">
            <Link className="flex items-center" to="/home">
              <h1 className="text-5xl font-bold text-gradient ml-0">BMS</h1>
            </Link>
          </div>
          <div className="flex items-center mr-0">
            <button
              className="text-black focus:outline-none mr-0"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <FaTimes className="w-8 h-8" style={{ color: "gray" }} />
              ) : (
                <FaBars className="w-8 h-8" style={{ color: "gray" }} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <FaTimes className="w-6 h-6 " style={{ color: "black" }} />
            </button>
          </div>

          <Link to="/bookings" className="mt-4 text-blue-500 block">
            Your Bookings
          </Link>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

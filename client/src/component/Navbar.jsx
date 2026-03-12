import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#E5E5E5] px-6 py-6 flex items-center justify-between">
      {/* BRAND */}
      <Link to="/" className="text-2xl text-[#0a0a0a] font-serif tracking-tighter">
        VELOURA
      </Link>

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.2em] text-[#0a0a0a]">
        {["Home", "About", "Services", "Bookings", "Contact"].map((item) => (
          <li key={item}>
            <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-[#D4AF37] transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* BOOKING CTA */}
      <Link 
        to="/booking" 
        className="hidden md:block border border-[#2D2D2D] px-6 py-2 text-black  text-[10px] uppercase tracking-widest hover:bg-[#2D2D2D] hover:text-white transition-all duration-500"
      >
        Book Now
      </Link>

      {/* MOBILE TOGGLE */}
      <button className="md:hidden text-black font-serif uppercase" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FAF9F6] border-b border-[#E5E5E5]  uppercase flex flex-col items-center font-serif text-black  py-10 space-y-6 md:hidden">
          {["Home", "About", "Services",  "Contact", "Booking"].map((item) => (
            <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
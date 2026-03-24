import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex justify-center mt-4 px-4">
      {/* Container capsule */}
      <div className="w-full max-w-7xl bg-[#1A1F2E] rounded-full px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-white font-semibold text-lg italic">
          Uniforms House
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm text-gray-300 font-medium">
          <a href="#" className="text-red-500">
            HOME
          </a>
          <a href="#" className="hover:text-white transition">
            HOTEL
          </a>
          <a href="#" className="hover:text-white transition">
            HOSPITAL
          </a>
          <a href="#" className="hover:text-white transition">
            SPA & SALON
          </a>
          <a href="#" className="hover:text-white transition">
            SECURITY
          </a>
          <a href="#" className="hover:text-white transition">
            T-SHIRTS
          </a>
          <a href="#" className="hover:text-white transition">
            INDUSTRIAL
          </a>
          <a href="#" className="hover:text-white transition">
            CORPORATE
          </a>
          <a href="#" className="hover:text-white transition">
            ABOUT US
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search (desktop only) */}
          <div className="hidden md:flex items-center bg-black rounded-full px-4 py-2 text-gray-400">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-2 text-sm w-32"
            />
          </div>

          {/* Cart */}
          <ShoppingCart className="text-white cursor-pointer" size={20} />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-24 w-full bg-[#1A1F2E] text-white flex flex-col items-center gap-4 py-6 lg:hidden">
          <a href="#">HOME</a>
          <a href="#">HOTEL</a>
          <a href="#">HOSPITAL</a>
          <a href="#">SPA & SALON</a>
          <a href="#">SECURITY</a>
          <a href="#">T-SHIRTS</a>
          <a href="#">INDUSTRIAL</a>
          <a href="#">CORPORATE</a>
          <a href="#">ABOUT US</a>
        </div>
      )}
    </div>
  );
};

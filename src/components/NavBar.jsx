import { useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<div className="w-full flex justify-center mt-4 px-4">
  <div className="w-full max-w-7xl bg-[#1A1F2E] rounded-full px-6 lg:px-8 py-3 flex items-center justify-between shadow-lg">
    
    {/* Left - Logo: Un poco más de presencia */}
    <div className="text-white font-bold text-lg italic tracking-tight shrink-0">
      Uniforms House <span className="text-red-500 not-italic"></span>
    </div>

    {/* Desktop Menu: Ajustamos el gap para que no sature */}
    <div className="hidden lg:flex gap-4 xl:gap-6 text-[12px] xl:text-[13px] text-gray-300 font-semibold items-center">
      <a href="#" className="text-red-500 border-b-2 border-red-500">HOME</a>
      <a href="#" className="hover:text-white transition">HOTEL</a>
      <a href="#" className="hover:text-white transition">HOSPITAL</a>
      <a href="#" className="hover:text-white transition">SPA & SALON</a>
      <a href="#" className="hover:text-white transition">SECURITY</a>
      <a href="#" className="hover:text-white transition">T-SHIRTS</a>
      <a href="#" className="hover:text-white transition">INDUSTRIAL</a>
      <a href="#" className="hover:text-white transition">CORPORATE</a>
      <a href="#" className="hover:text-white transition">ABOUT US</a>
    </div>

    {/* Right side: Más compacto */}
    <div className="flex items-center gap-3 xl:gap-5">
      <div className="hidden md:flex items-center bg-black/50 border border-gray-700 rounded-full px-3 py-1.5 text-gray-400">
        <Search size={14} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 text-xs w-24 xl:w-32 focus:w-40 transition-all"
        />
      </div>

      <div className="relative p-2 hover:bg-gray-700 rounded-full transition cursor-pointer">
        <ShoppingCart className="text-white" size={18} />
      </div>

      <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
  </div>
</div>
  );
};

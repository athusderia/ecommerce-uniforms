export const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-8 lg:px-16 py-2 bg-[#0B0F1A] text-gray-300 text-xs tracking-widest">
      {/* Left side */}
      <div>SINCE 2000</div>

      {/* Right side */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors duration-300">
          CONTACT
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          BLOG
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          CAREERS
        </a>
        <a href="#" className="hover:text-white transition-colors duration-300">
          FAQ
        </a>
      </div>
    </div>
  );
};

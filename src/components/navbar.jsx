const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-white">
      <div className="flex items-center justify-center py-1 px-7 lg:px-40 font-medium">
        <h1 className="text-lg">KQ 470</h1>
      </div>
      <div className="flex items-center justify-center py-2 px-7 lg:px-40 font-medium border-t">
        <ul className="hidden sm:flex gap-5 text-sm">
          <a
            className="text-black hover:text-[#CB9DF0] cursor-pointer"
            href="#hero"
          >
            home
          </a>
          <a
            className="text-black hover:text-[#CB9DF0] cursor-pointer"
            href="#about"
          >
            about
          </a>
          <a
            className="text-black hover:text-[#CB9DF0] cursor-pointer"
            href="#purchase"
          >
            purchase
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="w-full md:w-10/12 mx-auto flex justify-between items-center p-6 text-white">
        <h1 className="text-xl md:text-4xl font-saira font-bold">FurniShop</h1>

        <ul className="hidden md:flex gap-8 text-lg font-saira">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white -mt-3">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-saira">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

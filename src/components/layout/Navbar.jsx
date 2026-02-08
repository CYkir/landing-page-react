import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "../../utils/Scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#286F6C]  shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="w-full md:w-10/12 mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="text-xl md:text-4xl font-saira font-bold">
          <button onClick={() => scrollToSection("hero")}>FurniShop</button>
        </h1>

        <ul className="hidden md:flex gap-8 text-lg font-saira">
          <li className="cursor-pointer">
            <button onClick={() => scrollToSection("hero")}>Home</button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => scrollToSection("best-furniture")}>
              Feature
            </button>
          </li>
          <li className="cursor-pointer">
            <button onClick={() => scrollToSection("cta")}>contact</button>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white -mt-3">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-saira">
            <li className="cursor-pointer">
              <button onClick={() => scrollToSection("hero")}>Home</button>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => scrollToSection("best-furniture")}>
                Feature
              </button>
            </li>
            <li className="cursor-pointer">
              <button onClick={() => scrollToSection("cta")}>contact</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

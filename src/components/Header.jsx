import React from "react";
import scrollService from "../services/ScrollService";

const Header = () => {
  return (
    <header className="bg-[#5A2B2B] text-white py-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-10 text-brown-600 font-medium">
          <li>
            <button
              onClick={() => scrollService.scrollToSection("home")}
              className="hover:underline"
            >
              Beranda
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollService.scrollToSection("katalog")}
              className="hover:underline"
            >
              Katalog
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollService.scrollToSection("kontak")}
              className="hover:underline"
            >
              Kontak
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

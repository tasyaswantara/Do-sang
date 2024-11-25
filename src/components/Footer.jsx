import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4 absolute bottom-0 w-full">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Do-Sang Chips. All rights reserved.
    </p>
    <p className="text-sm">
      Powered by <span className="font-bold">React</span>, <span className="font-bold">Vite</span>, and <span className="font-bold">Tailwind CSS</span>.
    </p>
  </footer>
);

export default Footer;

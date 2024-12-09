import React from "react";
import BananaChips from "../assets/image/BananaChips.svg";
import scrollService from "../services/ScrollService";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white py-12 px-8 flex flex-col lg:flex-row items-center justify-between"
    >
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-8xl font-bold text-black leading-tight">
          Keripik Pisang<br></br>{" "}
          <span className="text-[#5A2B2B]">Do-Sang</span>
        </h1>
        <p className="text-gray-600 mt-4 text-xl font-medium">
          Rasakan renyah dan manisnya keripik pisang Do-Sang, camilan sempurna
          untuk setiap momen. Dibuat dari pisang berkualitas tinggi, untuk
          memberikan cita rasa terbaik.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start space-x-4 min-h-14">
          <button onClick={() => scrollService.scrollToSection("kontak")} className="bg-[#5A2B2B] text-white px-6 py-2 rounded-lg hover:bg-[#4B2323]">
            Pesan Sekarang
          </button>
          <button onClick={() => scrollService.scrollToSection("katalog")} className="border border-[#5A2B2B] text-[#5A2B2B] px-6 py-2 rounded-lg hover:bg-[#5A2B2B] hover:text-white">
            Katalog
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src={BananaChips}
          alt="Keripik Pisang"
          className="relative  w-[35vw]"
        />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Pisang from "../assets/image/pisang.jpeg";
import Wa from "../assets/icon/wa.png";
import FacadeService from "../services/FacadeService";

const Footer = () => {
  const waLink = FacadeService.generateWhatsAppLink(
    "628123456789",
    "Halo, saya tertarik dengan produk Do-Sang Chips."
  );

  return (
    <footer
      id="kontak"
      className="relative mt-40 h-[40vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${Pisang})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 py-10">
        <div className="bg-white w-[40%] h-[120px] shadow-[0_4px_20px_rgba(0,0,0,0.25)] rounded-2xl p-6 px-10 mx-auto flex -mt-24 justify-between items-center">
          <h2 className="text-xl font-bold text-[#5A2B2B]">
            Hubungi kami
            <br />
            untuk memesan!
          </h2>
          <a
            href={waLink}
            className="bg-[#53A612] text-white flex justify-between font-medium py-2 px-4 rounded-xl gap-4  items-center hover:bg-green-600 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Wa} alt="Whatsapp" className=" w-6" />
            <span className="mr-2">Whatsapp</span>
          </a>
        </div>

        {/* Navigasi dan Informasi */}
        <div className="mt-10 flex flex-wrap justify-end gap-20 items-start relative z-10">
          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Jelajahi</h3>
            <ul>
              <li>
                <a href="#home" className="text-gray-200 hover:text-gray-100">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="text-gray-200 hover:text-gray-100"
                >
                  Katalog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-200 hover:text-gray-100"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          {/* Informasi Alamat */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Alamat Kami</h3>
            <ul>
              <li className="text-gray-200">Malang</li>
              <li className="text-gray-200">Sun - Sat / 10:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

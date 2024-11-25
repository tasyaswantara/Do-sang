import React from 'react';
import FacadeService from '../services/FacadeService';

const Contact = () => {
  const waLink = FacadeService.generateWhatsAppLink('628123456789', 'Halo, saya tertarik dengan produk Do-Sang Chips.');

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Hubungi Kami</h2>
      <p className="mt-4">Klik tombol di bawah untuk menghubungi kami via WhatsApp!</p>
      <a href={waLink} className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded">Hubungi WhatsApp</a>
    </div>
  );
};

export default Contact;

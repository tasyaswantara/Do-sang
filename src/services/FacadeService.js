class FacadeService {
  static formatCurrency(price) {
    return price.replace("Rp", "Rp ").replace(",", ".");
  }

  static generateWhatsAppLink(phoneNumber, message) {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}

export default FacadeService;

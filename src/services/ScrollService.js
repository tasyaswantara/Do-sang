class ScrollService {
  static instance = null;

  constructor() {
    if (!ScrollService.instance) {
      ScrollService.instance = this;
    }
    return ScrollService.instance;
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}

const scrollService = new ScrollService();
export default scrollService;

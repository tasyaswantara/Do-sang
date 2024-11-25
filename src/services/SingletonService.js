class SingletonService {
    constructor() {
      if (SingletonService.instance) {
        return SingletonService.instance;
      }
      this.appData = { company: 'Do-Sang Chips', year: 2024 };
      SingletonService.instance = this;
    }
  
    getData() {
      return this.appData;
    }
  }
  
  export default new SingletonService();
  
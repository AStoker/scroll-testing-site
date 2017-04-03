export class App {
  constructor() {
    this.items = [];
    this.primaryItems = [];
    this.secondaryItems = [];

    for (let i = 0; i < 1000; i++ ) {
      this.primaryItems.push(`item a: ${i}`);
    }

    for (let i = 0; i < 100; i++ ) {
      this.secondaryItems.push(`item b: ${i}`);
    }

    this.items = this.primaryItems;
  }

  chooseArrayA() {
    this.items = this.primaryItems;
  }
  chooseArrayB() {
    this.items = this.secondaryItems;
  }

  getMore() {
    console.log('called');
  }
}

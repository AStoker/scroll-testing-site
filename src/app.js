import {computedFrom} from 'aurelia-framework';

export class App {
  constructor() {
    this._items = [];
    this.primaryItems = [];
    this.secondaryItems = [];
    this.query = '';

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

  @computedFrom('query', 'items')
  get items() {
    return this._items.filter(i => {
      return i.toLowerCase().indexOf(this.query.toLowerCase()) >= 0 || this.query.length === 0;
    });
  }
  set items(val) {
    this._items = val;
  }

  getMore() {
    console.log('called');
  }
}

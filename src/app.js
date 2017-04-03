import {computedFrom} from 'aurelia-framework';

export class App {
  constructor() {
    this._items = [];
    this.primaryItems = [];
    this.secondaryItems = [];
    this.query = '';
    this._activeArray = 'a'; //Just using this as a flag for testing changes

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
    this._activeArray = 'a';
  }
  chooseArrayB() {
    this.items = this.secondaryItems;
    this._activeArray = 'b';
  }

  @computedFrom('query', '_activeArray')
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

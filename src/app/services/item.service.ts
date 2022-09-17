import { Injectable } from '@angular/core'; //funcionaria como la clase gobal de siempre xD

import { Item } from '../models/Item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:Item[] = [
    {
    id: 0,
    title: "Manzana",
    price: 10.5,
    quantity: 4,
    completed: false
  },
  {
    id: 1,
    title: "Fideos",
    price: 8.3,
    quantity: 9,
    completed: false
  },
  {
    id: 2,
    title: "Milanesa de pollo",
    price: 15.8,
    quantity: 20,
    completed: false
  }];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}

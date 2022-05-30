import { isNgContainer } from '@angular/compiler/src/ml_parser/tags';
import { Injectable } from '@angular/core';

import { Ingredient } from '../recipe';

@Injectable()
export class ShoppingCartService {
  ingredients: Ingredient[] = [];

  constructor() {
    let data = window.localStorage.getItem('data');
    if (data != null) {
      this.ingredients = JSON.parse(data);
    }
  }

  add(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
    this.updateLocalStorage();
  }

  remove(index: number) {
    this.ingredients.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    window.localStorage.setItem('data', JSON.stringify(this.ingredients));
  }
}

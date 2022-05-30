import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { RECIPE_OMELET_DATA } from './recipe-omelet.data';

@Component({
  selector: 'app-recipe-omelet',
  templateUrl: './recipe-omelet.component.html',
  styleUrls: ['./recipe-omelet.component.css'],
})
export class RecipeOmeletComponent implements OnInit {
  // recipe: Recipe;

  constructor() {
    // this.recipe = RECIPE_OMELET_DATA;
  }
  ngOnInit() {}
}

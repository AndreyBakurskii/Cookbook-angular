export interface Recipe {
  name: string;
  image: string;
  description: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  amount: number;
}

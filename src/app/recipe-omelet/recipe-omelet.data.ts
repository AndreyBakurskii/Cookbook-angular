import { Recipe, Ingredient } from '../recipe';

export const RECIPE_OMELET_DATA: Recipe = {
  name: 'Омлет с молоком',
  image:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gastronom.ru%2Frecipe%2F11111%2Fomlet-s-molokom-na-skovorode&psig=AOvVaw3hLl2z567ZIYmaA9FPFXe5&ust=1653992634386000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPijwYKBh_gCFQAAAAAdAAAAABAD',
  description:
    'Взболтайте легкими движениями вилки яйца с молоком. Включите средний огонь и дайте сковороде прогреться. Добавьте оба вида масла. Когда масло начнет пениться, влейте смесь яиц с молоком. Наклоните сковороду под углом 45°, подцепите лопаточкой схватившийся край омлета и сдвиньте к середине. Сделайте тоже самое с другой стороной. Посолите, поперчите и подайте на стол.',
  ingredients: [
    { name: 'Яйца', amount: 2 },
    { name: 'Молоко', amount: 120 },
    { name: 'Растительное масло', amount: 10 },
    { name: 'Сливочное масло', amount: 5 },
  ],
};

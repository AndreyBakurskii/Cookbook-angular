import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeOmeletComponent } from './recipe-omelet/recipe-omelet.component';

export const routes: Routes = [
  {
    path: 'omelet',
    component: RecipeOmeletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

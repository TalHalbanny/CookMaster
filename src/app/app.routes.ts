import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrandsShopComponent } from './brands-shop/brands-shop.component';

//routes to new component must be BETWEEN default route and wildcard route!

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Default route (homepage)
  { path: 'Recipes', component: RecipesComponent }, // Route for Recipes
  { path: 'BrandsShop', component: BrandsShopComponent}, //Route for Brands Shop
  { path: '**', redirectTo: '' } // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

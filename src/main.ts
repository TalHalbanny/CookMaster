import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainContainerComponent } from './app/main-container/main-container.component';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app/app.routes';
import { RecipesComponent } from "./app/recipes/recipes.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContainerComponent, RecipesComponent,RouterOutlet],
  template: `
    <div>
    <app-main-container></app-main-container>
</div>

  `,
})
export class App {}

bootstrapApplication(App, { 
  providers: [
    provideRouter(routes)
  ]
});
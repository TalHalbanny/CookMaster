import { Component, importProvidersFrom, NgModule } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainContainerComponent } from './app/main-container/main-container.component';
import { routes } from './app/app.routes';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainContainerComponent],
  template: `
    <div>
    <app-main-container></app-main-container>
</div>

  `,
})
export class App {}
bootstrapApplication(App,
  {
    providers:[
      importProvidersFrom(RouterModule.forRoot(routes))
    ]
  }
);


import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainContainerComponent } from './app/main-container/main-container.component';

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

bootstrapApplication(App);
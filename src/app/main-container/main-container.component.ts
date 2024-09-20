import { Component } from '@angular/core';
import { NavigatorComponent } from '../navigator/navigator.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HomepageHeadComponent } from '../homepage-head/homepage-head.component';
import { HomepageCardsComponent } from '../homepage-cards/homepage-cards.component';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [NavigatorComponent,GalleryComponent,HomepageHeadComponent,HomepageCardsComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

}

import { Component } from '@angular/core';
import { HomepageCardsComponent } from "../homepage-cards/homepage-cards.component";
import { GalleryComponent } from "../gallery/gallery.component";


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomepageCardsComponent, GalleryComponent],
  template:`
  <br>
  <div style="justify-content: center; text-align:center;">
  <app-gallery></app-gallery>
  <br>
  <app-homepage-cards></app-homepage-cards>
  </div>
 `,
})
export class HomepageComponent {

}

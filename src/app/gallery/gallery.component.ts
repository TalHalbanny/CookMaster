import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  slides = [ //add or remove images from slider.
    {image: 'https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg'},
    {image: 'https://www.thespruceeats.com/thmb/EEoo7AQ8pKWXVC6RJEcMpPUA1GA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/country-breakfast-skillet-recipe-3056473-Hero_01-c1af3dae64054fc480c668f205d9514c.jpg'},
    {image: 'https://media.4rgos.it/i/Argos/sb-0322-m0014-m007-m050-asym-m008-m022-ninja-brandshop-air-fryers?w=auto&qlt=50&fmt=auto&noiser=0&fmt.jpeg.interlaced=true&fmt.jp2.qlt=40&'}
  ];

  //slider-running slides function.

  currentslider = 0;
  currentIndicatorColor = 'coral';

  slideRunner() {
    if (this.currentslider < this.slides.length - 1) {
      this.currentslider = this.currentslider + 1;
    } else {
      this.currentslider = 0;
    }
  }

}

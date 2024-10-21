import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-group',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './card-group.component.css',
  template:`
  <div class="row">
  <div class="col mb-4 text-center d-flex" *ngFor="let recipe of recipescache">
  <div class="card" style="height:450px; width: 350px">
      <img class="card-image-top" style="height:200px; width:350px"  [src]="recipe.imageSrc">
      <div class="card-title mt-3"><h2>{{recipe.title}}</h2></div>
      <div class="card-text mt-1" >{{recipe.description}}</div>
    <div class="containter mt-auto mb-3">
      <button class="btn" style="background-color: crimson; color: white;">Cook it!</button>
    </div>
    </div>
</div>`
})
export class CardGroupComponent {
 

recipescache = [
  {title: 'Omelette', description: 'Best Omelette youll ever make!', imageSrc: 'assets/omlet.jpg'},
  {title: 'Seasoned Steak', description: 'Easy to Make Seasoned Steak', imageSrc: 'assets/seasoned-steak.jpg'},
  {title: 'Dolmah',description: 'Tasty Dolmah recipe for the holiday!', imageSrc: 'assets/dolmah.jpeg'},
  {title: 'Ceaser Salad',description: 'Refreshing Salad for a summer evening.', imageSrc: 'assets/ceasar-salad.jpg'},
  {title: 'Homemade Chicken Sandwich',description: 'Chicken Sandwich just like at Fast Food Restaurant.', imageSrc: 'assets/chicken-sandwich.jpg'},
  {title: 'Grilled Honey Chicken',description: 'Grilled Honey Chicken that turns every meal amazing', imageSrc: 'assets/Honey-chicken.jpg'},
  {title: 'Home Fries',description: 'who knew little cubes of potato can cause so much happiness?', imageSrc: 'assets/home-fries.jpg'},
  {title: 'Spagetti & Meatballs',description: 'good old spagetti & meatballs allways lifts up the mood', imageSrc: 'assets/spagetti-and-meatballs-two.jpg'},
  {title: 'Beef Welington',description: 'Freshly baked lagendary meat pastry', imageSrc: 'assets/beef.jpg'},
  {title: 'Eggplant Parmesan',description: 'best eggplaent parmesan that gives you that good cheesy meal that you crave.', imageSrc: 'assets/eggplant.jpg'},
  {title: 'Eggplant Parmesan',description: 'best eggplaent parmesan that gives you that good cheesy meal that you crave.', imageSrc: 'assets/eggplant.jpg'},
  {title: 'Eggplant Parmesan',description: 'best eggplaent parmesan that gives you that good cheesy meal that you crave.', imageSrc: 'assets/eggplant.jpg'}
  
]



}



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-card-build',
  standalone: true,
  imports: [CommonModule, RouterLink],
  styleUrl: './shop-card-build.component.css',

  template: `
<div class="card m-3"> 
    <img [src]='pic' class="mx-auto d-block mt-3">
    <div class="card-body">
      <h3 class="card-title text-center">{{itemName}}</h3>
      <h5 class="card-text text-center">{{itemDes}}</h5>
      <br>
      <button class="button mx-auto d-block" [routerLink]="link">Tell Me More!</button>
      </div>
  </div>

  `
})
export class ShopCardBuildComponent {

  @Input()
  itemName!: string;
  @Input()
  itemDes!: string;
  @Input()
  pic!: string;
  @Input()
  link!: string;

}
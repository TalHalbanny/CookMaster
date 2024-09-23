import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
displayVal: string = "none";

show(){
this.displayVal = "block";
}

hide(){
this.displayVal = "none";
}

}
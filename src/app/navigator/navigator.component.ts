import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [CommonModule],
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
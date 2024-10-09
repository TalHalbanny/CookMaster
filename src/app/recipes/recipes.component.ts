import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardGroupComponent } from '../card-group/card-group.component';
import { MainContainerComponent } from "../main-container/main-container.component";


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RouterOutlet, CardGroupComponent, MainContainerComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {



}

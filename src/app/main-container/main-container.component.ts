import { Component } from '@angular/core';
import { RouterOutlet, RouterLink,RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';


@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule,HomepageComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {

}

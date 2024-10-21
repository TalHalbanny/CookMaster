import { Component } from '@angular/core';
import { ShopCardBuildComponent } from '../shop-card-build/shop-card-build.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands-shop',
  standalone: true,
  imports: [ShopCardBuildComponent,CommonModule,RouterLink],
  templateUrl: './brands-shop.component.html',
  styleUrl: './brands-shop.component.css'
})
export class BrandsShopComponent {

saleItems = [
  {itemName: 'Arcosteel JS56 Knife', itemDes: 'Great Cooking Knife for Everyday use', pic: 'assets/ARC1.png', link: '/Recipes'},
  {itemName: 'Arcosteel GridPot', itemDes: 'The Revoultionary Arcossteel Pot', pic: 'assets/ARC2.png', link: '/Recipes'},
  {itemName: 'Victronix Chef Cutter', itemDes: 'Swiss Made Chef Knife', pic: 'assets/VIC2.png', link: '/Recipes'},
  {itemName: 'Lamson M41K Chef Knife', itemDes: 'High Grip Chef Knife', pic: 'assets/LAM.png', link: '/Recipes'},
  {itemName: 'Rondell Flying Pan', itemDes: 'Lightwight Cooking Pan by Rondell', pic: 'assets/RND.png' , link: '/Recipes'},
  {itemName: 'Tefal Set GB14 Pan Set', itemDes: 'Set of 3 Quality Frying pans', pic: 'assets/ARSET.png' , link: '/Recipes'},
  {itemName: 'Arcossteel Grill Pan', itemDes: 'Best Grill pan Arcosteel has to offer', pic: 'assets/grillpan.png', link: '/Recipes'},
  {itemName: 'Vectronix Pot Set', itemDes: 'Great Cooking Knife', pic: 'assets/POTSET.png', link: '/Recipes'}
]  

}

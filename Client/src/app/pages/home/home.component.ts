import { Component } from '@angular/core';
import { OffersComponent } from "./offers/offers.component";
import { PlaneAnimationComponent } from "./plane-animation/plane-animation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OffersComponent, PlaneAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

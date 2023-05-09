import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    { id: 1, label: "Speghetti al pomodoro" },
    { id: 2, label: "Tagliata di Manzo" },
    { id: 3, label: "Tiramisu" }
  ]
  basePathImages = "../assets/images/imageBg-";
}

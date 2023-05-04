import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';

  nomeFoto = "foto del mare";
  label = "desrizione del mare";
  urlFoto = "https://img.freepik.com/premium-vector/tropical-landscape-coast-beautiful-sea-shore-beach-with-palm-trees-plants-good-sunny-day-flat-vector-illustration_257455-1815.jpg";

  images = [
    { id: 1, label: "label 1" },
    { id: 2, label: "label 2" },
    { id: 3, label: "label 3" }
  ]

  basePathImages = "../assets/images/imageBg-";

  scriviLog(){
    console.log("Hai cliccato col mouse sopra la foto")
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';
  evidenziato=false;

  coloreScelto = "green";
  colore = "grey";

  onChangeColor(){
    this.colore = this.coloreScelto;
  }

  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }

}

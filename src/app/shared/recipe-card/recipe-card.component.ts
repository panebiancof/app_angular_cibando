import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[];
  // questa variabile può uscire fuori dal componente
  @Output() messaggio = new EventEmitter();

  inviaTitolo(titolo: string){
    // fai uscire il titolo esternamente
    this.messaggio.emit(titolo);
  }
}

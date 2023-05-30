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

  inviaTitolo(recipe: Recipe){
    // fai uscire il titolo esternamente
    this.messaggio.emit(recipe);
  }

  truncate_string_with_space(stringa):number{
    const max_length = 160;
    if(stringa.length <= max_length){
      return max_length;
    }
    else{
      let last_space_position = stringa.indexOf(' ',max_length);
      return last_space_position;
    }
  }
}

import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  evidenziato=false;
  ricette: Recipe[];

  constructor(
    private recipeService: RecipeService
  ){}

  onEvidenziato() {
    this.evidenziato = !this.evidenziato;
  }

  ngOnInit(): void {
    this.prendiRicette()
  }

  prendiRicette(){
    this.recipeService.getRecipes().subscribe({
      // il next verrà usato se la chiamata andrà a buon fine
      next: (resp) => {
        this.ricette = resp;
        // ordinamento crescente
        this.ricette = this.ricette.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}



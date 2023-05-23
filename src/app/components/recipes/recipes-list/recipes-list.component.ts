import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  //creo una var che mi conterrà le ricette della chiamata
  ricette: Recipe[];
  titoloRicevuto: string;

  constructor(private recipeService: RecipeService ){}

  ngOnInit(): void {
      this.recipeService.getRecipes().subscribe({
        // il next verrà usato se la chiamata andrà a buon fine
        next: (resp) => {
          this.ricette = resp;
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  riceviMessaggio(event: any){
    this.titoloRicevuto == event ? this.titoloRicevuto = '' : this.titoloRicevuto = event;

  }

}

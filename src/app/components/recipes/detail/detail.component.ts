import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  ricetta: Recipe;
  basePathDifficolta = '../../../../assets/images/difficolta-'

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  /**
   * E' un LifeCycle Hook, appartiene ai cicli di vita di Angular eseguito all'inizializzazione
   * del componente, una volta.
  */
  ngOnInit(): void {
    //this.onGetRecipe();
    this.onGetRecipe2();
  }

  /**
   * PRIMO METODO tramite SNAPSHOT: recuperiamo l'id dal ActivatedRoute con snapshot
   * Usato se si ha SOLO 1 Parametro
   * */
  onGetRecipe(): void{
    /**
     * prendi un parametro _id dalla URL che scrivo dal browser
     * dal snapshot della rotta attiva e lo metti nella costante id
    */
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    /* getRecipe() è un metodo Observable che implementa l'interface Observer<T> */
    this.recipeService.getRecipe(id).subscribe({
      /**
       * A callback function that gets called by the producer during the subscription when
       * the producer "has" the `value`. It won't be called if `error` or `complete` callback
       * functions have been called, nor after the consumer has unsubscribed.
       *
       */
      next: (res) =>{
        this.ricetta = res;
        console.log("Ecco la Ricetta trovata: "+this.ricetta);
      },
      error: (e) =>{
        console.log(e);
      }
    })

    /**
     * OPPURE posso scrivere
     * this.recipeService.getRecipe(id).subscribe( res => this.ricetta = res);
     *
     * Anzichè qual mappazzone di righe di codice. E' la stessa cosa. Ma è più completa la prima
     * Posso gestire gli errori!
     */

  }

  /**
   * SECONDO METODO ALTERNATIVO tramite PARAMS
   */
  onGetRecipe2(): void{
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = Number(urlParams['_id']);

      this.recipeService.getRecipe(id).subscribe({
        next: (res) =>{
          this.ricetta = res;
          console.log("Ecco la Ricetta trovata: "+this.ricetta);
        },
        error: (e) =>{
          console.log(e);
        }
      })
    })
  }


}

# Lezione 8 - 18/05/2023

## Creiamo il componente per i dettagli di ricette 
> ng generate component components/recipes/detail

## Routing dinamico
Poi ci andiamo a configurare il routing del componente dei dettagli giustamente dentro app-routing.module.ts:
  { path: 'dettaglio/:_id', component: DetailComponent},
il carattere : identifica che è un parametro. Quindi :_id sarà un parametro dinamico che identifica l'id della ricetta.

Il Routing lo associo (lo metto nell'HTML) al button Visualizza nel template di recipe-card.component.html:
  <a class="btn btn-primary" routerLink="dettaglio/{{recipe._id}}">Visualizza</a>
Quando usiamo il routerLink togliamo l'href standard html (generato automaticamente).
Quindi stiamo passando al componente DetailComponent il link. Dopo il link lo mandiamo Al service, che lo invierà al BE. Così gli ritornano i dati relativi alla nostra ricetta (titolo, foto, ecc...). 
Ed il service manderà al componente.

Ora mettiamo un metodo nel nostro service recipe.service.ts che andrà a prendersi la ricetta: 
  getRecipe(id: number): Observable<Recipe | undefined> {
    const recipe = RECIPES.find( ricetta => ricetta._id === id);
    return of (recipe);
  }

ricetta sarà un oggetto che contiene la ricetta cn quell'id.
Usiamo la funzione of, that works in the following way:
1. Create an observable instance
2. Take the next argument in queue and send it to the observer
3. When there are no more values in the data source, send the complete notification to the observer 

## Aggiungiamo al nostro detail.component.ts
1. IMPORT
  import { Component, OnInit } from '@angular/core';
  import { Recipe } from 'src/app/models/recipe.model';
  import { RecipeService } from 'src/app/services/recipe.service';
  import { ActivatedRoute, Router } from '@angular/router';

2. Lo Iniettiamo nel Constructor
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ){}

3. Implementiamo il metodo implements OnInit ed aggiungiamo:
  3.1 export class DetailComponent implements OnInit{}
  A callback method that is invoked immediately after the
     * default change detector has checked the directive's
     * data-bound properties for the first time,
     * and before any of the view or content children have been checked.
     * It is invoked only once when the directive is instantiated.

  3.2 ngOnInit(): void {
  }  










# Lezione 9 - 23/05/2023

## PIPE Angular
  |slice
  |date

## Cross Component Communication

### Decorator Input 
export class RecipeCardComponent {
  @Input() recipes: Recipe[];
}
<app-card [recipe]="ricette"

### Decorator Output
(nomeParametroFiglio)="nomeMetodoPadre($event)" 
- (nomeParametroFiglio) --> SORGENTE. proprietà di tipo @Output dentro al figlio
- "nomeMetodoPadre($event)" --> TARGET. deve eessere una funzione nel padre che riceve l'evento






# Lezione 5 - 09/05/2023
 ## data binding two way
  <div>
    recupero dei dati per input[] ed interpolazione {{}}
    <img [src]="urlFoto" [alt]="label" (click)=scriviLog() >
    <h3>{{nomeFoto}}</h3>
  </div>

 ## componenti
 ad esempio l'header sarà un component
 il footer un altro.
 il corpo un altro.

 Così li posso riutilizzare in più pagine. Oppure perchè c'è tanto HTML e lo organizzo meglio.
 Andiamo a fare un refactoring

 ng generate component shared/carousel

 ## direttive di attributo
 sono usate per gestire la grafica:
 - ngClass (per fare le classi dinamiche)
 - ngStyle (per fare gli stili dinamici)

 [ngClass]="valore ? seVero : seFalso"

 ## ng-template 
 sono dei contenitori nascosti, non li vediamo nel DOM, a meno chè non vengono richiamati con una referenza #.
 > <ng-template #pippo1>

 ## ng-for aggiuntiva
 contare l'index di ogni array

 

 
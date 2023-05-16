# Lezione 7 - 16/05/2023

## Routing angular
se clicco su ricette vado alla pagina di ricette. E' già integrato in Angular rispetto a React. 
Dentro app-routing.module.ts importiamo i componenti che raggiungeremo col link.


> ng generate component shared/recipeCard

## Data binding
- Da componente padre a figlio (databinding di tipo input [])
- Da figlio a padre (databing di tipo output con parentesi ())

<app-card [recipe]="ricette"></app-card>
app-card = nome del selettore (in questo caso figlio)
[recipe] = target di tipo input nel figlio
"ricette" = è il sorgente, che viene dal padre

In altre parole mette all'interno di recipe quello che mi veine passato da ricette.


# Lezione 4 - 04/05/2023
>git add . 
La prima volta che carichiamo usiamo questo comando. 

>git commit -m "initial commit"
>git push

Nel nostro progetto utilizzeremo i google fonts, https://fonts.google.com/. Da qui includiamo i nostri fonts nell' head dell'html.

Poi usiamo le librerie grafiche bootstrap, da terminale facciamo: 
>npm install bootstrap 

ed anche JQuery:
>npm install jquery

Andiamo nel file "angular.json" e aggiungiamo 2 volte nel file, sia in test che prod :
    "styles": [
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "src/styles.scss"
    ],
    "scripts": [
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]

Andiamo ad installarci la libreria grafica ufficiale di Angular, primeng https://primeng.org/:
>npm i primeng

se non dovesse andare usiamo:
>npm i primeng --legacy-peer-deps

Inoltre dobbiamo installarci la lib delle icone:
>npm i primeicon

Dentro tsconfig.json impostiamo:
    "strict": false,
così possimao inizializzare le variabili senza assegnarle. ES dentro app.component.ts:

export class AppComponent {
  title = 'cibando';
  pippo : string;
}

Ora installiamo una version di bootstrap specifica per angular https://ng-bootstrap.github.io/#/home:
>ng add @ng-bootstrap/ng-bootstrap

## Databinding
### One Way (unidirezionale):
.html ---(recupero i dati)---> classe.ts

oppure 
.html <---(recupero i dati)--- classe.ts

Databing di tipo input nel caso di one way:
>INPUT []

oppure:
>Interpolazione {{NOME_VAR}}

Fino ad ora abbiamo immesso i dati dentro l'HTML. Ora facciamo il contrario, quindi dall'HTML mandiamo verso TS:
>OUTPUT ()

### Two Way:
.html <---(recupero i dati)---> classe.ts

  <img [src]="urlFoto" [alt]="label" (click)=scriviLog() >

## Direttive strutturali *ngFor e *ngIf
    <div class="carousel-item active" *ngFor="let image of images">
      <img class="d-block w-100"
      [src]="basePathImages+image.id+'.jpg'" [alt]="image.label">
      <h2>{{image.label}}</h2>
    </div>

## Direttiva *ngSwitchCase 
Tutto quello che posso fare conl o switch lo posso fare con la direttiva if, quindi è poco usata.
 <iv id_contenitore-switch [ngSwitch]="colore">
  <div *ngSwitchCase="'green'">Questo div comparirà solo se il colore scelto sarà verde</div>
  <div *ngSwitchCase="'red'">Questo div comparirà solo se il colore scelto sarà rosso</div>
  <div *ngSwitchCase="'white'">Questo div comparirà solo se il colore scelto sarà bianco</div>
  <div *ngSwitchDefault>Questo div comparirà solo se non sarà stao scelto il colore</div>
 </div>


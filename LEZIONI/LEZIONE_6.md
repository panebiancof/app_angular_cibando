# Lezione 6 - 11/05/2023
Facciamo un esempio di applicazione.

Abbiamo:
-FrontEnd = mostra i dati contenuti sul Database. Ad esempio abbiamo un component che mostra le ricette. Per recuperare questi dati usa un Servizio. 
-Service = recupera i dati chiedendoli al BE
-BackEnd = recupera i dati dal DB e li restituisce al Service (ad esempio una response JSON)
-DataBase = ci sono i dati delle ricette

Per procedere con la creazione del FE possiamo creare un file di esempio JSON di risposta ( un MOCK).

## Service angular
I servizi sono dei Singleton (di quel servizio ne avremo sempre solo uno). Ogni servizio sarà dedicato ad una sua competenza.

> ng generate service services/recipe

 crea un servizio singleton e tramite la dependency injection vado a fornire i dati. Questo servizio recupera le Ricette. Inserisci/Modifica/Cancella ricetta. 

## Dependency Injection angular
 Inietta la dipendenza. I servizi che creo li inietto dentro i singoli component (le pagine del sito).

## Model
Il modello deve essere importato nel Service. Ma nache il Mock.
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipe.mock';

## App - LifeCycle Dei Component e Sincronizzazione
Le ricette devono comparire all'avvio. Si legge l'HTML e quando arriva alla lista delle ricette farà un percorso per recuperare i dati sul DB. Ci vorranno dei tempi tecnici. Accadrà che abbiamo un problema di sincronizzazion dei dati. Non carica la pagina, o meglio rimane appesa in attesa della response delle ricette.

Una volta recuperati i dati saranno presenti nel DOM. Questo tipo di chiamate sono dette ASINCRONE! Per gestirle Angular mi mette a disposizione una libreria RxJS.

### The RxJS library
RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.
Possiamo andare ad utilizzare gli Observable.  Esempio Netflix: gli utenti devono sottoscrivere un abbonamento, una subscribe, per vedere i film che sono nella piattaforma. NetFlix è il nostro Observable, gli urtenti sono i subscriber. Netflix emette un fluss oconinuo, noi siamo in ascolto di quello che accade. 

Se io creo un metodo e gli dico che è un Observable il componente può sottoscriversi al metodo asincrono. Altrimenti se è sincrono non c'ha senso usarlo. Appena il metodo riceve la lista delle ricette i subscriber saranno notificati.

Asynch --> await
Aspettiamo che sia finita.

Nel service:
import { Observable } from 'rxjs';

## creaiamo un componente che mostra la lista delle ricette
>  ng generate component components/recipes
Da angular 15 è stata  tolta la creazione del costruttore in maniera automatica. I servizi si iniettano nel costruttore e lo creiamo:
- constructor(){}

Inoltre è stato tolto di default il ciclo di Vita onInit. Lo andiamo a mettere:




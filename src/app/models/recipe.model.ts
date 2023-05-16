// creo un modello di ricette.
// visto che non abbiamo ancora il modello creiamo dei file di mock (di test) così possiamo iniziare a lavorare
// l'underscore servirà poi a mongoDB che il primo campo lo crea così.

export interface Recipe{
  _id : number;
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date: string;
  published: boolean;

}

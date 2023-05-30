# Lezione 10 - 25/05/2023

## Form
In angular esistono 2 tipologie di Form:
- Template Driven (o detto Template Form)
- Reactive Form (più potenti)

Entrambi mi danno entrambi la stessa cosa, una Form. I primi sono guidati dal template, non ci si può intervenire troppo dopo, i secondi sono manuali. I template Driven sonom eno utilizzati ma sono comodi per alcune cose.

I Reactove Form sono inoltre riutilizzabili.

### Template Driven
Per usare le form importiamo dentro app.module.ts il modulo FormModule.
 
Eseguiamo poi il component:
> ng generate component components/user/registration

dentro l'html mettiamo:
<form #form="ngForm">
  <input type="text" name="fullname" ngModel>
  <button type="submit">Registrati</button>
</form>  

#form è una reference template e posso associargli gli elementi dentro, un formGroup. Ci mettiamo gli ngModel

Tutto il lavoro è lato template, vista html.

### Reactive Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" formControlName="name" >
  <button type="submit">Registrati</button>
</form>  

Il collegamento formControlName="name" lo faccio con il nome di quello che ho messo sul TypeScript

//proprietà
form = new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  passwordRepeat: new FormControl(''),
  accetto: new FormControl(false)
});

## Validators








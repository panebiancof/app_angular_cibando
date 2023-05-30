import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  //proprietà
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    password: new FormControl('', Validators.required),
    passwordRepeat: new FormControl('', Validators.required),
    accetto: new FormControl(false,Validators.requiredTrue)
  });

  // metodo usato dal form template driven
  // onSubmit(form: any){
  //   console.log(form);
  // }

  //metodo usato dal Reactive form
  onSubmit(){
    console.log(this.form);
  }

}

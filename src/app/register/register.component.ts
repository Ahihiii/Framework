import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup( {
      username: new FormControl('', [Validators.required, Validators.minLength(5),this.checkUsername]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
   }

  ngOnInit(): void {
  }

  checkUsername (control: AbstractControl) : ValidationErrors |null {
    const username = control.value;
    if(!username.includes('huy')) {
      return {hasName : true};
    }
    return null;
  }

}

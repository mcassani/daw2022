import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  enviado = false;
  loginForm = this.builder.group(
    {
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]
    }
  )
  faCoffee = faCoffee;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.enviado = true;
    // console.log(this.loginForm.get('usuario')!.value);
    console.log(this.loginForm.controls);
    console.log(this.loginForm.controls['usuario'].value);
    console.log(this.loginForm.controls['password'].value);
  }
 
}

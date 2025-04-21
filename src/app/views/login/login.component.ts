import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {InputComponent} from "../../components/input/input.component";
import {LoginService} from "./services/login.service";
import {User} from "./models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    InputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

 /* public nombre: string = '';
  public password: string = '';

  onSubmit(form: NgForm){
    if(form.valid){
      //TODO: Enviar al api back
    }
  }*/
  formulario: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(undefined, [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  async onSubmit() {

    const user: User = {
      name: this.formulario.value.name,
      password: this.formulario.value.password
    }

    try {
      await this.loginService.loginUser(user);
      this.router.navigate(['/home']);
    }catch (error) {
      throw error;
    }
  }


}

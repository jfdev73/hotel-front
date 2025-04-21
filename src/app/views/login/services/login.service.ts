import { Injectable } from '@angular/core';
import {User} from "../models/User";
import {LoginRepositoryService} from "./repository/login.repository.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private repository: LoginRepositoryService) { }

  loginUser(user: User){
    return new Promise((resolve, reject) => {
      this.repository.login(user).subscribe((data)=>{
        if(data.token){
          window.localStorage.setItem("token", data.token);
          resolve('')
        }
      })

    })
  }
}

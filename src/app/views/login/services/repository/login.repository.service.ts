import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {Observable} from "rxjs";
import {ResponseLogin} from "../../models/ResponseLogin";

@Injectable({
  providedIn: 'root'
})
export class LoginRepositoryService {

  private readonly http: HttpClient = inject(HttpClient);

  private readonly baseUrl: string = "./api";

  constructor() { }

  login(data: User): Observable<ResponseLogin>{

    return this.http.post<ResponseLogin>(`${this.baseUrl}/login`, data);



  }
}

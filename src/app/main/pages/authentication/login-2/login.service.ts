import { LoginReq } from './login.model';
import { environment } from './../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  serverApi = "http://20.87.14.18/"

  constructor(private http: HttpClient) { }

  loginUser(payload: LoginReq) {
    return this.http.post<LoginReq>(`${environment.apiUrl}api/LoginAPI/Login`, payload)
  }
}

import { LoginReq, LoingRes } from './login.model';
import { environment } from './../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(payload: LoginReq) {
    return this.http.post<LoingRes>(`${environment.apiUrl}api/LoginAPI/Login`, payload)
  }
}

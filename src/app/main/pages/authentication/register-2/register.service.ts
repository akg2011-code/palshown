import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { registerReq } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(payload: registerReq) {
    return this.http.post<registerReq>(`${environment.apiUrl}api/LoginAPI/Register`, payload)
  }

}

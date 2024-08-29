import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { UserRequest } from '../entity/UserRequest';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthApiService extends BaseApiService {
  // login(body:UserRequest) {
  //   return this.http
  //     .post<{ token: string }>(this.urlService.concat("noauth/login"), body)
  //     .subscribe((response) => {
  //       localStorage.setItem('token', response.token);
  //       this.router.navigate(['/home']);
  //     });
  // }

  login(body: UserRequest): Observable<any> {
    return this.postToken(`noauth/login`, body);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (this.isLocalStorageAvailable()) return !!localStorage.getItem('token');
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }

  getUserRole(): string | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken && decodedToken.roles) {
      return decodedToken.roles;
    }
    return null;
  }

  getUserData() {
    const decodedToken = this.getDecodedToken();
    return decodedToken;
  }


  public isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}

import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { Observable } from 'rxjs';
import { UserEntity } from '../entity/UserEntity';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends BaseApiService{

  getAllUsers(): Observable<UserEntity[]>{
    return this.getService("user/see");
  }

  createUser(body:UserEntity):Observable<any>{
    return this.postServiceBody(`user/create`,body);
  }
}

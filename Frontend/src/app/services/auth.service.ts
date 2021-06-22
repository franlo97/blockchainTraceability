import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:5000/user/'
  httpOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  };

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(userId:string, password:string):Observable<any>{
    const model = {
      id: userId,
      password: password,
    }
    return this.httpClient.post<any>(this.url+'checkPassword', model, this.httpOptions);
  }

  register(user:User):Observable<any>{
    return this.httpClient.post<any>(this.url+'setUser', user, this.httpOptions);
  }

  getUser(id:string):Observable<any>{
    return this.httpClient.get<any>(this.url+'getUser?id='+id);
  }

  updateUser(user:User):Observable<User>{
    return this.httpClient.put<User>(this.url+'updateUser', user, this.httpOptions);
  }

  deleteUser(id:string):Observable<any>{
    return this.httpClient.delete<any>(this.url+'deleteUser?id='+id);
  }
}

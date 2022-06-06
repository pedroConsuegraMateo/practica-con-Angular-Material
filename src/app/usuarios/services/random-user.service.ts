import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/page/randomUser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private httpClient: HttpClient) { }

  public randomUser(): Observable<User> {
    const user = this.httpClient.get<User>("https://randomuser.me/api");

    return user;
  }

}

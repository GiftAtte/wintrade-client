import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_ROUTES } from 'src/app/environment/api';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }




  getUsers(): Observable<any> {
    return this.http.get<any>(USER_ROUTES)
  }
 
 
}

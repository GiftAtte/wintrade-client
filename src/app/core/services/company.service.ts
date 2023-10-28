import { Observable, map, tap } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
 providedIn: 'root'
})
export class UserService {

 constructor(public http: HttpClient) {
 }

 
 baseUrl  ="http://127.0.0.1:3000/"
 getUsers(): Observable<any> {
   return this.http.get<any>(this.baseUrl+'users')
 }



login(data:any):Observable<any>{
  return this.http.post(this.baseUrl+'auth',data)
}


register(data:any):Observable<any>{
    return this.http.post(this.baseUrl+'users',data)
}






}
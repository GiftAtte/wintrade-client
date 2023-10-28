import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH_ROUTES, USER_ROUTES } from 'src/app/environment/api';
import { User } from '../models/user.model'; 
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'current-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }


  login(data:any):Observable<any>{
    return this.http.post(AUTH_ROUTES+'login',data)
  }
  
  
  register(data:any):Observable<any>{
      return this.http.post(AUTH_ROUTES+'register',data)
  }
  logOut(){
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    this.router.navigateByUrl('/home');
  }

  updateUser(data:any):Observable<any>{
    return this.http.put(USER_ROUTES+'/'+data.id,data)
}
  saveUserData(data:{token:string,user:User}){
      localStorage.setItem(USER_KEY,JSON.stringify(data.user))
      localStorage.setItem(TOKEN_KEY,JSON.stringify(data.token))
       this.router.navigateByUrl('/dashboard');
  }

  get currentUser():User|null{
    const userData=window.localStorage.getItem(USER_KEY);
    if(userData){
        return  JSON.parse(userData)
    }
    return null;
  }
  get token():string|null{
    const token=window.localStorage.getItem(TOKEN_KEY);
    if(token){
        return  JSON.parse(token)
    }
    return null;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(USER_ROUTES)
  }
  get isLogIn():boolean{
    return this.token!=null;
  }

  hasRole(role:string):boolean{
    return this.currentUser?.role===role
  }
}

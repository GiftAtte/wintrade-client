import { Component, OnInit,DoCheck } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wintrade';
  constructor(private authService:AuthService,private route:Router){

  }
  ngOnInit(): void {

  }
//   ngDoCheck():void{
// console.log(this.route.url)
//   }
  
  get isAuthenticated():boolean{
    // console.log(this.route.url)
    return this.authService.isLogIn
}
   get isMainPageOrNotAuthenticated():boolean{
    // console.log(this.route.url)
   return !this.isAuthenticated ||this.route.url.startsWith('/#')||this.route.url==='/'
   }
}

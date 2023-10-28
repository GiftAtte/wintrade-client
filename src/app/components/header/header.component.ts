import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgbCollapseModule,FormsModule,NgbDropdownModule,],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

constructor(private router:Router,private authService:AuthService){}




  public isCollapsed = true;
  isHeaderScrolled=false
  menuItems=[  
{name:"Home",path:"home"},
{name:"About Us",path:"about"},
{name:"Services",path:"services"},
{name:"Pricing",path:"brokers"},
{name:"Testimonials",path:"testimonials"},
{name:"Contact Us",path:"contact"},
  ]


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const yOffset = window.pageYOffset;

    
    const scrollThreshold = 100; 

    
    this.isHeaderScrolled = yOffset >= scrollThreshold;
  }
  // this.router.naigate(['/component-one']);


  ngOnInit(): void {
    if(!this.authService.isLogIn){
      this.navigate('/')
    }
  }
  navigate(path:string){
    this.router.navigateByUrl(path)
  }

 logOut(){
   this.authService.logOut()
  }
  get isAuthenticated():boolean{
      return this.authService.isLogIn
  }
  get isAdmin():boolean{
    return this.authService.hasRole("ADMIN_USER")
  }
}

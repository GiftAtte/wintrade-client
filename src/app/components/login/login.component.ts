import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
loginError=false;
  constructor(
    private router:Router,
    private authService:AuthService,
    private fb:FormBuilder
    ){}


ngOnInit(): void {
  if(this.authService.isLogIn){
this.navigate('dashboard')
  }
  this.initializeForm();
}

  navigate(path:string){
    this.router.navigateByUrl(path)
  }



initializeForm(){
  this.loginForm=this.fb.group({
    email:['',Validators.required,Validators.email],
    password:['',Validators.required],
  })
}



login(){
  this.authService.login(this.loginForm.value).subscribe({
    next:(res)=>{
      const{token,user}=res;
        this.authService.saveUserData({token,user})
    },
    error:(err)=>{
      this.loginError=true
    }
  })
}
}

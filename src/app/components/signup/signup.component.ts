import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!:FormGroup;
  isInvalidForm=false
  passwordMatchedError=false;
  constructor(
    private router:Router,
    private authService:AuthService,
    private fb:FormBuilder
    ){}


ngOnInit(): void {
  this.initializeForm();
}

  navigate(path:string){
    this.router.navigateByUrl(path)
  }



initializeForm(){
  this.signupForm=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
    confirm_password:['',Validators.required],
    phone_number:['',Validators.required],
    role:['USER']
  })
}



signUp(){

  if(!this.comparePassword()){
    this.passwordMatchedError=true;
  }else{
    this.passwordMatchedError=false;
  }


  if(this.comparePassword()&&this.signupForm.valid){
    this.isInvalidForm=false;
  this.authService.register(this.signupForm.value).subscribe({
    next:(res)=>{
     if(res.user){
     localStorage.setItem('userData',JSON.stringify(res))
     console.log()
      this.navigate('/login')
     }
    }
  })}
  else{
    this.isInvalidForm=true;
  }
}

comparePassword(){
  return this.signupForm.get('password')?.value===this.signupForm.get('confirm_password')?.value;
}
}

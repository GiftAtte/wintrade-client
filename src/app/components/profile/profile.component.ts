import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/core/models/payment.model';
import { Product } from 'src/app/core/models/product.model';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { PaymentService } from 'src/app/core/services/payment.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

constructor(
   private authService:AuthService,
   private fb:FormBuilder,
   private productService:ProductService,
   private paymentService:PaymentService
   ){}
user!:any;
products:Product[]=[];
userPayments:Payment[]=[]
payment!:Payment
title=''
reference =''
selectedProduct!:Product
userForm!:FormGroup;
  ngOnInit(): void {
    this.user=this.authService?.currentUser;
    this.initilizeForm();
    this.fillUserData(this.user);
    this.loadProducts();
    this.loadUserPayments()

    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }



initilizeForm(){
  this.userForm=this.fb.group({
    id:[''],
    name:['',Validators.required],
    email:['',Validators.required],
    phone_number:['',Validators.required],
    password:['']
  })
}

fillUserData(data:any){
this.userForm.patchValue(data)
}


updateUser(){
  this.authService.updateUser(this.userForm.value).subscribe({
    next:(res)=>this.authService.logOut()
  })
}
loadProducts(){
this.productService.getAllProduct().subscribe({
  next:(res)=>{
    this.products=res.products;
  }
})
}

paymentInit(product:Product) {
localStorage.setItem('selectedProduct',JSON.stringify(product))
}

paymentDone(ref: any) {

  let selectedProduct:any=localStorage.getItem('selectedProduct')
  if(selectedProduct){
    let selectedProductObj:Product=JSON.parse(selectedProduct)
   
    const salesDetails:Payment={
        id:1,
        product_id:selectedProductObj.id,
        amount:selectedProductObj.price,
        transaction_id:ref.reference,
        status:'success',
        payment_type:'Paystack',
        currency:'NGN'


    }
    console.log('sales details...',salesDetails)
    this.paymentService.createPayment(salesDetails).subscribe({
      next:(res)=>{
       this.loadUserPayments()
      
    },
    error:(err)=>{
      console.log(err)
    }

    })
  }



}

paymentCancel() {
  console.log('payment failed');
}


loadUserPayments(){
  console.log('user payments')
this.paymentService.getUserPayments().subscribe({
  next:(res)=>{
    this.userPayments=res.payments;
    console.log('user payments',this.userPayments)
  }
})
}
get currentUser():any{
  return this.authService.currentUser
}
}

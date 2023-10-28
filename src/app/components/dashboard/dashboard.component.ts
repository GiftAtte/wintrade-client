import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import {
  Columns,
  API,
  APIDefinition,
  DefaultConfig,
  Config,
} from 'ngx-easy-table';

import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service'; 
import { Router } from '@angular/router';
import { Payment } from 'src/app/core/models/payment.model';
import { PaymentService } from 'src/app/core/services/payment.service';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public configuration: Config = { ...DefaultConfig };
  public payments: Payment[] = [];
  public users: User[] = [];
  public products: Product[] = [];
  public columns: Columns[] = [];
  modal = false;
  selected:any;
  constructor(
    private authsevice: AuthService,
    private router:Router,
    private paymentService:PaymentService,
    private productService:ProductService
    ) {
  }

  @ViewChild('table', { static: true })
  table!: APIDefinition;
  @ViewChild('actionTpl', { static: true })
  actionTpl!: TemplateRef<any>;

  ngOnInit(): void {
   
    this.columns = [
      { key: 'user', title: 'Username' },
      { key: 'name', title: 'Product' },
      { key: 'email', title: 'Amount' },
      { key: 'created_at', title: 'Transaction Date' },
      { key: 'transaction_id', title: 'Transaction Reference' },
    ];
   this.loadTransactions();
   this.loadUsers();
   this.loadProduct()
   
    this.configuration.rows = 5;
  }



  onEvent(event: { event: string; value: any }): void {
    this.selected = JSON.stringify(event.value.row, null, 2);
  }


  showModal(): void {
    this.modal = true;
  }

  hideModal(): void {
    this.modal = false;
  }

  logout(){
    this.authsevice.logOut()
  }


  deleUser(user:User){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'User removed successfully.', 'success');
      } 
    }); 
  }



  loadUsers(){
    this.authsevice.getUsers().subscribe({
      next:(res=>{
        console.log(res)
         this.users = res.users
      })
    });
  }
  loadTransactions(){
this.paymentService.getAllPayment().subscribe({
  next:(res)=>{
    this.payments=res.payments
  }
})
  }
  loadProduct(){
    this.productService.getAllProduct().subscribe({
      next:(res)=>{
        this.products=res.products
      }
    })
  }
  get income():number{
     return this.payments.reduce((sum:number,item:Payment)=>sum+Number(item.amount),0)
  }
  get userCount():number{
       return this.users.length
  }
  get productCount():number{
    return this.products.length
}
}

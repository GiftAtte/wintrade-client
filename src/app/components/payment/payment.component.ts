import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/core/models/payment.model';
import { PaymentService } from 'src/app/core/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  payments:Payment[]=[]
  constructor(private paymentService:PaymentService){}

  ngOnInit(): void {
    
  }


  loadPayment(){
      this.paymentService.getAllPayment()
              .subscribe({
                next:(res)=>{
                  this.payments=res.payments
                }
              })
  }
}

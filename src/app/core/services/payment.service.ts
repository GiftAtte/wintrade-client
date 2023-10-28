import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PAYMENT_ROUTES } from 'src/app/environment/api';
import { Payment } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }


  
  createPayment(data:Payment):Observable<any>{
    return this.http.post(PAYMENT_ROUTES,data)
}
updatePayment(data:Payment):Observable<any>{
  return this.http.put(PAYMENT_ROUTES+'/'+data.id,data)
}
getAllPayment():Observable<any>{
  return this.http.get(PAYMENT_ROUTES)
}

getPaymentById(id:number):Observable<any>{
  return this.http.get(PAYMENT_ROUTES+id)
}

deletePayment(id:number):Observable<any>{
  return this.http.delete(PAYMENT_ROUTES+'/'+id)
}

getUserPayments():Observable<any>{
  return this.http.post(PAYMENT_ROUTES+'/user-payments',null)
}
}

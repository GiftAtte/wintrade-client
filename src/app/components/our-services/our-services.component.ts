import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

constructor(private productService:ProductService){}

  reference = '';
  title=''
  products:Product[]=[]

signalEdge={
  title:"Signal Edge",
  content:`Never miss an opportunity with our High-Accuracy Signals. 
  Relish the convenience of real-time forex trade alerts right at your fingertips! Our top-tier traders dedicate their expertise to serve you better. Accessible on any smart device from anywhere. Grow your wealth rapidly on a weekly, even daily basis! Our top traders send real-time trade alerts directly to you Monday through Friday.`
}
cashFlow={
  title:"Cashflow 360",
  content:"Cashflow 360 is a financial markets self-trading automated system. The system uses Algorithm Intelligent (A.I) to generate profits trading financial instruments such as: Forex currencies eg EURUSD, Commodities e.g Gold or XAUUSD, Crypto currency e.g Bitcoin or BTCUSD,Synthetic Markets e.g Volatility 75, 50,25&10."
}

eFaculty={
  title:"Wintrade e-Faculty",
  content:"Seeking an all-encompassing financial market education? Look no further! Dive into the world of Forex, binary options and Cryptocurrency at your own pace. With our easily accessible video tutorials tailored to Basic, Intermediate or Advanced learners. Our video tutorials are divided into three levels - Basic, Intermediate and Advanced for seamless learning. No prior knowledge? Fear not! We start right at the beginning making sure everyone can keep up."
}

techZone={
  title:"Wintrade TechZone",
  content:"Unlock a world where coding knowledge is no more a barrier.Learn how to build an Expert Advisor without any programming skills required and convert those smart trading strategies of yours directly into high-performing bots. Equip yourself with a highly sought-after income skills that pay big in global markets."
}


ngOnInit(): void {
  this.loadProduct()
  this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
}

paymentInit() {
  console.log('Payment initialized');
}

paymentDone(ref: any) {
  this.title = 'Payment successfull';
  console.log(this.title, ref);
}

paymentCancel() {
  console.log('payment failed');
}


loadProduct(){
  this.productService.getAllProduct().subscribe({
    next:(res)=>{
      this.products=res.products
    }
  })
}
}

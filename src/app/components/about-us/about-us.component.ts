import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  isReadMore:boolean = false
content :string = " Wintrade is a fintech company established to provide information on the money niche ,digital means of earning, and the financial market and also providing  research and tech solutions to both retail and institutional traders in the financial market.As a research & Analysis company, we seek to provide quality solutions, strategies designed to increase profitability to enable individuals to experience abundance.Ever dreamt of financial freedom? Imagine a life where you can kick back and watch your income grow, without lifting a finger. Welcome to the world of Wintrade Algo! We offer an automated trading system that works while you sleep or enjoy time doing things you love most. No more endless hours spent analyzing data - our smart technology does it all for so effortlessly.This high-tech automated trading system harnesses the best in market leverage tools for utmost profitability. With our state-of-the-art algorithmic technology, you can unlock lucrative assets without breaking a sweat! WinTrade's advanced algorithms work tirelessly 24/7  in the financial market so you can enjoy a life less ordinary. This means more time for what matters most and consistent passive income flowing into your account, no matter where in the world or how busy you are.With our lucrative assets at hand, making a living from the markets has never been easier! The best part? No experience necessary – anyone who wants to maximize their wealth potential can make full use of this powerful tool.To be an outstanding Currency trading company,by creating superior value for clients by maintaining ethics and professionalism."

vission="To help individuals, institutions, business owners and communities build wealth and realize their dreams."

toggleContent(){
  this.isReadMore = !this.isReadMore
}



}

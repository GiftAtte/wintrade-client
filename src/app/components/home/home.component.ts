import { AfterViewInit, Component } from '@angular/core';
declare var anime: any;  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  AfterViewInit {


  ngAfterViewInit(): void {
    // Wrap every letter in a span
// const textWrapper:any = document.querySelector('#header');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '#header',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el:any, i:number) => 500 + 30 * i
}).add({
  targets: '#header',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1100,
  delay: (el:any, i:number) => 100 + 30 * i
});


}
}

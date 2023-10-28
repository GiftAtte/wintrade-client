import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['  ', '  '],
    autoplay: true,
    center: true,
     autoHeight: true,
     autoWidth: true,
     autoplayTimeout:15*1000,
     
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  
  }
  
    slides = [
      {id: "1", img: "../../assets/img/testimonia/1.jpeg", author:"Louiz",fullText:false,
      msg:`I was stuck in a 9 to 5 job, barely making ends meet. Then I found Wintrade Algo! This asset has been my golden ticket to passive income who transformed the way I perceive financial markets."

      "The consistent profits that rolled into my account were nothing short of amazing. No more worrying about bills or saving for vacations - they're now realities within easy reach!"
      
      "Wintrade Algo isn't just an investment; it's a lifestyle change towards complete financial freedom and stability for your family—a feeling unlike any other.”
      
      "Why keep struggling when you can enjoy this kind of peace? Don’t take only from me, give WinTrade Algorithm trading system a try today!" 
      
      "Dive into the world where finances stop being a burden but become pleasure instead. You won't be disappointed.`
    },

      // SLIDE 2
      {
        id: "2", img: "../../assets/img/testimonia/2.jpeg",author:"Mark",fullText:false,
        msg:`Before I stumbled upon Wintrade Algo, it felt like my life was an endless cycle of chasing after a stable income. As an entrepreneur, the uncertainty weighed heavily on me; those sleepless nights wondering how to cover bills were all too common.

        That's when Wintrade Algo entered the scene and changed everything for me! This isn't just another financial gimmick – no sirree!
        
        Rather than being tied down by active management or unpredictable market changes, this asset generated passive income that consistently trickled in month after month. 
        
        WinTrade didn’t ask much from me either — even as someone relatively new to financial markets,I could navigate through effortlessly due its user-friendly interface.
        
        The consistent profits translated into more freedom - not only financially but also personally! Weekend getaways? Check. Aiding family needs without breaking a sweat? Double check!
        
        It gave our lifestyle such fantastic boost while taking away worries about money matters completely off my plate."
        
        Isn't it time you experienced true peace-of-mind knowing your finances are under control?
        
        Experience what real consistency feels like today with WINTRADE ALGO!`
    },


// SLIDE 3
      {id: "3", author:"Dawin",fullText:false,
      img: "../../assets/img/testimonia/3.jpeg",
      msg:`I was on the brink of despair, juggling between jobs and struggling to make ends meet. Then I discovered something amazing -Wintrade Algo.
      This asset transformed my financial situation from distressing instability into consistent profit! It wasn't just a dream anymore; it became reality for me- an incredible opportunity that gave way to passive income, liberating me from endless cycles of employment uncertainties.
      
      The results were simply astounding – no more worrying about bills or unexpected expenses as my earnings began growing steadily in the financial market. The best part? This is not only meant for Wall Street experts but designed specifically keeping budding investors like us in mind!
      
      I had never imagined enjoying such an extravagant lifestyle before—financial freedom seemed so far away until now—but thanks to this extraordinary tool by WinTrade algo, every day feels like sailing smoothly through calm waters rather than battling stormy seas."
      
      And why should you try it too? Because if someone who once barely understood stock markets can achieve these heights then so can you! And there's nothing better than sharing success stories while helping others reach their goals".
      
      With immense gratification and confidence, let me urge: Don’t miss out on your chance at prosperity. Embrace what has brought joyous change in countless individuals' lives already including mine.
      So folks... Take charge today & dive into world where possibilities are limitless!`
    },

    // SLIDE 4
       {id: "4", img: "../../assets/img/testimonia/4.jpeg",author:"Misheal",fullText:false,
       msg:`As a single mother, I was on the brink of despair, juggling between jobs and struggling to make ends meet. Then I discovered something amazing -Wintrade Algo.

       This asset transformed my financial situation from distressing instability into consistent profit! It wasn't just a dream anymore; it became reality for me- an incredible opportunity that gave way to passive income, liberating me from endless cycles of employment uncertainties.
       
       The results were simply astounding – no more worrying about bills or unexpected expenses as my earnings began growing steadily in the financial market. The best part? This is not only meant for Wall Street experts but designed specifically keeping budding investors like us in mind!
       
       I had never imagined enjoying such an extravagant lifestyle before—financial freedom seemed so far away until now—but thanks to this extraordinary tool by WinTrade algo, every day feels like sailing smoothly through calm waters rather than battling stormy seas."
       
       And why should you try it too? Because if someone who once barely understood stock markets can achieve these heights then so can you! And there's nothing better than sharing success stories while helping others reach their goals".
       
       With immense gratification and confidence, let me urge: Don’t miss out on your chance at prosperity. Embrace what has brought joyous change in countless individuals' lives already including mine.
       So folks... Take charge today & dive into world where possibilities are limitless!"`
      }
    ];


    toggleFullText(slideId:string){
     this.slides=this.slides.map(item=>{
      if(item.id===slideId){
        item['fullText']=!item['fullText']
      }
      return item
     })

    }

}

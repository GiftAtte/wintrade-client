import { Component ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent {

  @Input() showLink:boolean=false
  @Input()content:any=''
  @Input()title:string=''
  @Input() iconClass:string=''
  @Input() borderClass="border-0"
  @Input() buttonClass="btn-primary"
  @Input() buttonText:any="Explore"
  @Input() bodyClass=''
  @Input() Class=''
  @Input() textClass='fs-5 text-start'
  @Input() path:string=''

  constructor(private router:Router){

  }



  navigateTo(path:string){
         this.router.navigateByUrl(path)
  }
}

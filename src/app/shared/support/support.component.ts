import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
@Input () title:string=""
@Input () content:string=""
@Input() iconClass="bi bi-reception-4"
}

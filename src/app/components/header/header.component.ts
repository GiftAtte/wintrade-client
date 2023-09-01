import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Dropdown} from 'bootstrap'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NgbCollapseModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isCollapsed = true;
  menuItems=[  
{name:"Home",path:"home"},
{name:"About Us",path:"about"},
{name:"Product",path:"product"},
{name:"Shop",path:"shop"},
{name:"Brokers",path:"brockers"},
{name:"Testimonials",path:"testimonials"},
{name:"Refund Policy",path:"refund"},
{name:"Contact Us",path:"contact"},
  ]
}

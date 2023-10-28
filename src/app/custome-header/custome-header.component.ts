import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  selector: 'app-custome-header',
  templateUrl: './custome-header.component.html',
  styleUrls: ['./custome-header.component.scss']
})
export class CustomeHeaderComponent  {

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  }




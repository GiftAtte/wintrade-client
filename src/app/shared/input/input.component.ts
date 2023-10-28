import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label!: string;
  @Input() control!: FormControl;

  // Add validation properties
  @Input() required: boolean = false;
  @Input() pattern: string = '';
  @Input() email: boolean = false;
 @Input() inputType='text'
  // Define an array of attribute names to forward
  @Input() inputAttributes: { [key: string]: any } = {};
  // Add getter for validation errors


  constructor(private el: ElementRef, private renderer: Renderer2) {}

  get errorMessages() {
    if (this.control.errors) {
      for (const key in this.control.errors) {
        if (this.control.errors.hasOwnProperty(key)) {
          return this.getErrorMessage(key);
        }
      }
    }
    return '';
  }

  private getErrorMessage(key: string): string {
    switch (key) {
      case 'required':
        return 'This field is required.';
      case 'pattern':
        return 'Invalid input format.';
      case 'email':
        return 'Invalid email format.';
      // Add more error messages for other validators as needed
      default:
        return '';
    }
  }



  setAttributes() {
    const inputElement = this.el.nativeElement.querySelector('input');

    // Set input attributes dynamically
    for (const key in this.inputAttributes) {
      if (this.inputAttributes.hasOwnProperty(key)) {
        this.renderer.setAttribute(inputElement, key, this.inputAttributes[key]);
      }
    }
  }
}

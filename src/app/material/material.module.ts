import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {NgFor, DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    NgFor,
    DatePipe,
    MatTabsModule

  ],
  exports:[
    MatListModule,
    MatIconModule,
    MatDividerModule,
    NgFor,
    DatePipe,
    MatTabsModule 
  ]

})
export class MaterialModule { }

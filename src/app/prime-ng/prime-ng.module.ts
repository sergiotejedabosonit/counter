import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputNumberModule
  ],
  exports: [
    ButtonModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }

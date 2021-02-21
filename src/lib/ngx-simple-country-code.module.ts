import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSimpleCountryCodeComponent } from './ngx-simple-country-code.component';

@NgModule({
  declarations: [NgxSimpleCountryCodeComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [NgxSimpleCountryCodeComponent]
})
export class NgxSimpleCountryCodeModule { }

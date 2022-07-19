import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculateTotalPricePipe, ConvertToUpperCasePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ConvertToUpperCasePipe,
    CalculateTotalPricePipe,
  ],
  exports: [
    ConvertToUpperCasePipe,
    CalculateTotalPricePipe,
  ],
})
export class SharedModule {}

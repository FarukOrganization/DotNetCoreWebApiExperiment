import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ProductComponent
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }

import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './productservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

allproducts:IProduct[]=[];

constructor(private productservice:ProductService){}

ngOnInit() {

 this.getproducts();
}

getproducts()
{
  this.productservice.getproducts().subscribe(products=>{ this.allproducts=products;});
//   this.allproducts=[
//  {"id":1, "name":"Computer", "description":"This is desktop computer", "price": 500000,imgurl:"https://openclipart.org/download/288754/laptop-personification-work-ready-body-builder.svg"},
//  {"id":2, "name":"Laptop", "description":"This is desktop computer", "price": 600000,imgurl:"https://openclipart.org/download/168489/PC.svg"}
//   ];

} 

}

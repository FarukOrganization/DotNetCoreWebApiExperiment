import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "./IProduct";
import { HttpClient } from "@angular/http";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    productapiurl:string= "http://localhost:58152/products";
constructor(private httpclient:HttpClient){}

getproducts():Observable<IProduct[]>{

return this.httpclient.get<IProduct[]>(this.productapiurl);
}

}


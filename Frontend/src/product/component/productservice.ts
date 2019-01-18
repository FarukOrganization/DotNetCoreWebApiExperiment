import { inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./IProduct";
import { HttpModule, Http } from "@angular/http";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    productapiurl:string = "http://localhost:58152/api/products";
constructor(private http:HttpClient){}

getproducts():Observable<IProduct[]>{

return this.http.get<IProduct[]>(this.productapiurl).pipe(tap(data => console.log('All' + JSON.stringify(data))),catchError(this.handleError));
}

private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_ROUTES } from 'src/app/environment/api';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  createProduct(data:Product):Observable<any>{
    return this.http.post(PRODUCT_ROUTES,data)
}
updateProduct(data:Product):Observable<any>{
  return this.http.put(PRODUCT_ROUTES+'/'+data.id,data)
}
getAllProduct():Observable<any>{
  return this.http.get(PRODUCT_ROUTES)
}

getProductById(id:number):Observable<any>{
  return this.http.get(PRODUCT_ROUTES+id)
}

deleteProduct(id:number):Observable<any>{
  return this.http.delete(PRODUCT_ROUTES+'/'+id)
}


}

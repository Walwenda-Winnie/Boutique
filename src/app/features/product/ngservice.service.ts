import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }

  fetchproductListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8080/getproductlist");
  }
  addproductToRemote(product:Product):Observable<any>{
    console.log(" Reaching addproduct service");
    return this._http.post<any>("http://localhost:8080/addproduct",product);
  }
  fetchProductByIdFromRemote(id: number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/getproductbyid/"+id);
  }
  deleteProductByIdFromRemote(id: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8080/deleteproductbyid/"+id);
  }
  



 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  constructor(private http: HttpClient) { }

  API='http://localhost:8080';
  public registerSupplier(supplierData){
      return this.http.post(this.API+'/registerSupplier', supplierData);
  }

  public getSuppliers(){
      return this.http.get(this.API+'/getSuppliers');
  }
  public deleteSupplier(id){
      return this.http.delete(this.API +'/deleteSupplier?id='+id);

  }
  public updateSupplier(supplier){
      return this.http.put(this.API +'/updateSupplier',supplier);
  }
}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  host:string = "http://localhost:8080";

  constructor(private http:HttpClient) {}

  getRessource(url,size,page):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.host}/${url}?size=${size}&page=${page}`);
  }

  addRessource(url,product):Observable<Product>{
    return this.http.post<Product>(`${this.host}/${url}`,product);
  }

}

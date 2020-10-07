import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ProductModelServer, ServerResponse} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  // To fetch all products from the backend Server
  getAllProducts(numberOfResults= 51): Observable<ServerResponse>{
        return this.http.get<ServerResponse>(this.SERVER_URL + '/products', {
          params: {
            limit: numberOfResults.toString()
          }
        });
  }

  /*Get Single Product from server*/
  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }

    /*Get Single Product from server*/
  getProductFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
  }

}


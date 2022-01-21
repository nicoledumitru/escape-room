import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductData } from '../models/product-data'
import { TokenStorageServiceService } from './token-storage-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class GetCartService {
    private apiUrl = 'http://localhost:8080/cart';
    
    private headers : HttpHeaders;
  
    constructor(private http: HttpClient,
        private tokenService: TokenStorageServiceService) { 
            this.headers = new HttpHeaders()
            .set('content-type','application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Authorization','Bearer '+ this.tokenService.getToken() );
        }
  
    getCart(): Observable<ProductData[]> {
      return this.http.get<ProductData[]>(this.apiUrl, {'headers' : this.headers}) as Observable<ProductData[]>;
    }
  }
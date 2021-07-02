import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from './orders.model';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
readonly baseURL = 'http://165.22.49.251';
  orders : Orders[] = [];

  constructor(private http : HttpClient) { }
getOrdersList(){
  return this.http.get(this.baseURL);
}

}

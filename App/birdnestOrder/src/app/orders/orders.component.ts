import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';
import { Orders } from '../shared/orders.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [ OrdersService]
})
export class OrdersComponent implements OnInit {

  constructor(public orderService : OrdersService) { }

  ngOnInit(): void {
    this.refreshOrdersList();
    setInterval(() => {
      this.refreshOrdersList();
    }, 8000);
  }

  refreshOrdersList(){
    this.orderService.getOrdersList().subscribe((res)=>{
      this.orderService.orders = res as Orders[];
    })
  }

}

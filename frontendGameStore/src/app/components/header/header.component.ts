import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RouterModule } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';
import {ServerResponse} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    // variables to store the total and the cartData Object
  cartData: CartModelServer;
  cartTotal: number;


  constructor(public cartService: CartService,
              public productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }

  // tslint:disable-next-line:typedef
  /*searchProduct(input: string) {
     for (const p in this.productService.getAllProducts()){
          if (p.includes(input)){
          }
     }
  }*/
}

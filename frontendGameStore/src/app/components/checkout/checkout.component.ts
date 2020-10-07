import {Component, NgModule, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import {CartModelServer} from '../../models/cart.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartTotal: number;
  cartData: CartModelServer;
  showSpinner: boolean;
  checkoutForm: any;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  // tslint:disable-next-line:typedef
  onCheckOut() {
    // const spinnerName = 'my-spinner';
    // // this.spinner.show();
    // this.spinner.getSpinner(spinnerName)
    //   .pipe(
    //     first(({show}) => !!show)
    //   )
    //   .subscribe(() => {
    //       this.cartService.CheckoutFromCart(1);
    //     }
    //   );
    // console.log('works');
    this.spinner.show();
    this.cartService.CheckoutFromCart(1);
  }
}

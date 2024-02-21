import { Component, OnInit } from '@angular/core';
import {Certification} from "../models/certification.model";
import {ActivatedRoute} from "@angular/router";
import {CertificationService} from "../_services/certification.service";
import {loadStripe} from "@stripe/stripe-js";
import {environment} from "../../environments/environment";
import {CheckoutService} from "../_services/checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  certification?: Certification;
  stripePromise = loadStripe('pk_live_51OW90nCxzoszcrHkPVt8oF53SqI5kGTTU6XrK114pzu4xfZUjF435SvW6lO260NwXC09tAIOzKLcYiritRDF09NG00PwnAFFVS');

  constructor(private certificationService : CertificationService,
              private checkoutService : CheckoutService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCertification(this.route.snapshot.params['id']);
  }

  getCertification(id: any) : void {
    this.certificationService.getCertification(id)
      .subscribe(
        data => {
          this.certification = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: this.certification?.libelle,
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: this.certification?.amount,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    const stripe = await this.stripePromise;

    console.log(payment.amount);

    // this is a normal http calls for a backend api
    this.checkoutService.callBackPay(payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        // @ts-ignore
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }

}

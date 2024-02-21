import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {UserExamen} from "../models/UserExamen.model";
import {Certification} from "../models/certification.model";
import {CheckoutService} from "../_services/checkout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {



  certification?: Certification;
  constructor(private checkoutService : CheckoutService,
              private router: Router) { }

  ngOnInit(): void {


    var libelle = window.sessionStorage.getItem('current_certification');
    var id =   window.sessionStorage.getItem('idcertification');
    var amount = window.sessionStorage.getItem('amount');
    // @ts-ignore
    var certificationId: number = +id;
    // @ts-ignore
    var certificationamount : number = +amount;

    console.log('before create payment')

    const payment = {
      name: libelle,
      certificationId: certificationId,
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: certificationamount,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };



    this.checkoutService.registerPayement(payment)
      .subscribe(
        data => {
          this.certification = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });



  }

}

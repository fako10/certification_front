import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../_services/certification.service";
import {CheckoutService} from "../_services/checkout.service";
import {Certification} from "../models/certification.model";

@Component({
  selector: 'app-psm1',
  templateUrl: './psm1.component.html',
  styleUrls: ['./psm1.component.css']
})
export class Psm1Component implements OnInit {

  certification?: Certification;
  amount?: number;
  constructor(private certificationService : CertificationService,
              private checkoutService : CheckoutService) { }

  ngOnInit(): void {
    this.getCertification("CAPM");
  }

  getCertification(libelle: any) : void {
    this.certificationService.getCertificationByLibelle(libelle)
      .subscribe(
        data => {
          this.certification = data;
          // @ts-ignore
          this.amount = this.certification.amount / 100;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  async pay(): Promise<void> {

    return this.checkoutService.pay(this.certification);
    // here we create a payment object
  }

}

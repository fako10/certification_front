import { Component, OnInit } from '@angular/core';
import {Certification} from "../models/certification.model";
import {CertificationService} from "../_services/certification.service";
import {CheckoutService} from "../_services/checkout.service";



@Component({
  selector: 'app-pmptest',
  templateUrl: './pmptest.component.html',
  styleUrls: ['./pmptest.component.css']
})
export class PmptestComponent implements OnInit {

  certification?: Certification;

  id: number = 1;
  amount?: number;
  constructor(private certificationService : CertificationService,
              private checkoutService : CheckoutService) { }

  ngOnInit(): void {
    this.getCertification("PMP");
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

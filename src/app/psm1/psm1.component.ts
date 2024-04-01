import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../_services/certification.service";
import {CheckoutService} from "../_services/checkout.service";
import {Certification} from "../models/certification.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-psm1',
  templateUrl: './psm1.component.html',
  styleUrls: ['./psm1.component.css']
})
export class Psm1Component implements OnInit {

  certification?: Certification;
  amount?: number;
  constructor(private certificationService : CertificationService,
              private checkoutService : CheckoutService,
              private title: Title,
              private meta : Meta

              ) { }

  ngOnInit(): void {
    this.getCertification("PSM I");
    this.title.setTitle('PSM1 exam practice test');
    this.meta.updateTag({
      name: 'description',
      content: 'Our PSM1 test provides questions similar to those on the official exam. Our tests allow you to have optimal preparation for the exam. The explanations we give allow you to better understand the concepts.'
    });
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

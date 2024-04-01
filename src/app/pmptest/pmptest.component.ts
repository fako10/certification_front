import { Component, OnInit } from '@angular/core';
import {Certification} from "../models/certification.model";
import {CertificationService} from "../_services/certification.service";
import {CheckoutService} from "../_services/checkout.service";
import {Meta, Title} from "@angular/platform-browser";



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
              private checkoutService : CheckoutService,
              private title: Title,
              private meta : Meta
              ) { }

  ngOnInit(): void {
    this.title.setTitle('PMP exam practice test');
    this.meta.updateTag({
      name: 'description',
      content: 'Our PMP test provides questions similar to those on the official exam. Our tests allow you to have optimal preparation for the exam. The explanations we give allow you to better understand the concepts.'
    });
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

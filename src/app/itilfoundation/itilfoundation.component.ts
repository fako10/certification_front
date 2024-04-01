import { Component, OnInit } from '@angular/core';
import {CertificationService} from "../_services/certification.service";
import {CheckoutService} from "../_services/checkout.service";
import {Certification} from "../models/certification.model";
import {Meta, Title} from "@angular/platform-browser";


@Component({
  selector: 'app-itilfoundation',
  templateUrl: './itilfoundation.component.html',
  styleUrls: ['./itilfoundation.component.css']
})
export class ItilfoundationComponent implements OnInit {

  certification?: Certification;

  id: number = 1;
  amount?: number;
  constructor(private certificationService : CertificationService,
              private checkoutService : CheckoutService,
              private title: Title,
              private meta : Meta
              ) { }

  ngOnInit(): void {
    this.getCertification("ITIL® 4 Foundation");
    this.title.setTitle('Itil Foundation exam practice test');
    this.meta.updateTag({
      name: 'description',
      content: ''
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
  }

}

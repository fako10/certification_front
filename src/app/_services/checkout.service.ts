import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Certification} from "../models/certification.model";
import {environment} from "../../environments/environment";
import { Router} from "@angular/router";
import {loadStripe} from "@stripe/stripe-js";


const baseUrl = 'http://localhost:8080/api/payement';
const URL = 'http://localhost:8080/api/payement/register';

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  stripePromise = loadStripe('pk_live_51OW90nCxzoszcrHkPVt8oF53SqI5kGTTU6XrK114pzu4xfZUjF435SvW6lO260NwXC09tAIOzKLcYiritRDF09NG00PwnAFFVS');


  constructor(private http: HttpClient,
              private router: Router) {
  }

  callBackPay(payement: any): Observable<string> {

    // @ts-ignore
    return this.http.post(`${baseUrl}`, payement);
  }

  registerPayement(payement: any): Observable<Certification> {
    console.log(payement);
    return this.http.post(`${URL}`, payement);
  }

  saveCertificationOnSession(certification: Certification | undefined): void {
    // @ts-ignore
    window.sessionStorage.setItem(environment.libellecertification, <string>certification.libelle);
    // @ts-ignore
    window.sessionStorage.setItem(environment.idcertification, <string>certification.id?.toString());
    // @ts-ignore
    window.sessionStorage.setItem(environment.amount, <string>certification.amount?.toString());
  }

  async pay(certification: Certification | undefined): Promise<void> {
    const user = window.sessionStorage.getItem('auth-user');
    if (user == null) {
      this.saveCertificationOnSession(certification);
      this.router.navigateByUrl('/login');
    } else {
      this.saveCertificationOnSession(certification);

      const payment = {
        name: certification?.libelle,
        certificationId: certification?.id,
        currency: 'usd',
        cancelUrl: 'http://localhost:4200/cancel',
        successUrl: 'http://localhost:4200/success',
        // amount on cents *10 => to be on dollar
        amount: certification?.amount,
        quantity: '1',

      };

      const stripe = await this.stripePromise;

      console.log(payment.amount);

      // this is a normal http calls for a backend api
      this.callBackPay(payment)
        .subscribe((data: any) => {
          // I use stripe to redirect To Checkout page of Stripe platform
          // @ts-ignore
          stripe.redirectToCheckout({
            sessionId: data.id,
          });
        });
    }

  }
}

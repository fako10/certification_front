import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-emailvalidation',
  templateUrl: './emailvalidation.component.html',
  styleUrls: ['./emailvalidation.component.css']
})
export class EmailvalidationComponent implements OnInit {

  email!:string;
  username !: string;
  validationCode!:string;
  password = '';
  isEmailValidationFailed = false;
  errorMessage = '';


  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
  }

  onSubmit(): void {
      const pass = this.authService.getPassword();


      if(pass != null) {
        this.password = pass;
      }
      this.authService.emailValidation(this.username, this.password, this.validationCode).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        window.location.reload();
        this.router.navigateByUrl('/home');
      },
      err => {
        this.errorMessage = 'Email validation failed';
        this.isEmailValidationFailed = true;

      }
    );
  }

}

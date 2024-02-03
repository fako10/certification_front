import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {Router} from "@angular/router";
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isLocked = false;
  email = '';
  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });

  }

  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.isLocked = data.locked;
        if (this.isLocked) {
          console.log(data);
          this.authService.savePassword(password);
          this.router.navigateByUrl(`emailvalidation/${username}`)
        } else {
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
        }

      },
      err => {
        this.errorMessage = 'login or password incorrect';
        this.isLoginFailed = true;

      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}

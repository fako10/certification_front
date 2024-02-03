import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptors';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CertificationComponent } from './certification/certification.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExamenListComponent } from './examen-list/examen-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserExamenComponent } from './user-examen/user-examen.component';
import { ExamenComponent } from './examen/examen.component';
import { UserexamrecapquestionsComponent } from './userexamrecapquestions/userexamrecapquestions.component';
import { UserexamenquestionsComponent } from './userexamenquestions/userexamenquestions.component';
import { UserexamenvalidateComponent } from './userexamenvalidate/userexamenvalidate.component';
import { QuestionsvalidateComponent } from './questionsvalidate/questionsvalidate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItilComponent } from './itil/itil.component';
import { ScrumComponent } from './scrum/scrum.component';
import { PmpComponent } from './pmp/pmp.component';
import { CapmComponent } from './capm/capm.component';
import { PmptestComponent } from './pmptest/pmptest.component';
import { ItilfoundationComponent } from './itilfoundation/itilfoundation.component';
import { Psm1Component } from './psm1/psm1.component';
import { EmailvalidationComponent } from './emailvalidation/emailvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    BoardUserComponent,
    CertificationComponent,
    CertificationsComponent,
    ExamenListComponent,
    QuestionsComponent,
    UserExamenComponent,
    ExamenComponent,
    UserexamrecapquestionsComponent,
    UserexamenquestionsComponent,
    UserexamenvalidateComponent,
    QuestionsvalidateComponent,
    ItilComponent,
    ScrumComponent,
    PmpComponent,
    CapmComponent,
    PmptestComponent,
    ItilfoundationComponent,
    Psm1Component,
    EmailvalidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

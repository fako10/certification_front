import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CertificationComponent } from './certification/certification.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExamenListComponent } from './examen-list/examen-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { UserExamenComponent } from './user-examen/user-examen.component';
import {ExamenComponent} from "./examen/examen.component";
import {UserexamenvalidateComponent} from "./userexamenvalidate/userexamenvalidate.component";
import {QuestionsvalidateComponent} from "./questionsvalidate/questionsvalidate.component";
import {ItilComponent} from "./itil/itil.component";
import {ScrumComponent} from "./scrum/scrum.component";
import {PmpComponent} from "./pmp/pmp.component";
import {CapmComponent} from "./capm/capm.component";
import {PmptestComponent} from "./pmptest/pmptest.component";
import {ItilfoundationComponent} from "./itilfoundation/itilfoundation.component";
import {Psm1Component} from "./psm1/psm1.component";
import {EmailvalidationComponent} from "./emailvalidation/emailvalidation.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {SuccessComponent} from "./success/success.component";
import {ChangepasswordComponent} from "./changepassword/changepassword.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'itil', component: ItilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'itilfoundation', component: ItilfoundationComponent },
  { path: 'scrum', component: ScrumComponent },
  { path: 'emailvalidation/:username', component: EmailvalidationComponent },
  { path: 'psm1', component: Psm1Component },
  { path: 'capm', component: CapmComponent },
  { path: 'pmptest', component: PmptestComponent },
  { path: 'pmp', component: PmpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'certificationList', component: CertificationsComponent },
  { path: 'examenList/:id', component: ExamenListComponent},
  { path: 'examen/:id', component: ExamenComponent},
  { path: 'questions/:id', component: QuestionsComponent},
  { path: 'userExamen/:id', component: UserExamenComponent},
  { path: 'userExamenValidate/:id', component: UserexamenvalidateComponent},
  { path: 'questionValidate/:id', component: QuestionsvalidateComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

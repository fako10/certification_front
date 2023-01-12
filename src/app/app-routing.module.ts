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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'certificationList', component: CertificationsComponent },
  { path: 'home/examenList/:id', component: ExamenListComponent},
  { path: 'questions/:id', component: QuestionsComponent},
  { path: 'userExamen/:id', component: UserExamenComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

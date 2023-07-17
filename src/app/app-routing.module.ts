import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfessionalsListComponent } from './pages/professionals/professionals-list/professionals-list.component';
import { ClientHomeComponent } from './pages/clients/home/client-home/client-home.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'professionals', component:  },
  { path: 'signup', component: SignupComponent },
  { path: 'professionals', component: ProfessionalsListComponent },
  // rota apenas para testar o layout:
  { path: 'client', component: ClientHomeComponent },
  //{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

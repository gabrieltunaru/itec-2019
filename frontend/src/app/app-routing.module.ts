import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'profile', component: ProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {BrowseComponent} from './pages/browse/browse.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'browse', component: BrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

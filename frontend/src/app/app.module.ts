import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {
  _MatMenuDirectivesModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatMenuModule, MatRadioModule, MatSelectModule, MatSidenavModule, MatSlideToggleModule,
  MatSnackBarModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AuthComponent } from './pages/auth/auth.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CategoryComponent } from './components/category/category.component';
import { SellComponent } from './components/sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SigninComponent,
    SignupComponent,
    AuthComponent,
    ProfileComponent,
    ProfilePageComponent,
    SellerProfileComponent,
    CategoriesComponent,
    BrowseComponent,
    CategoryComponent,
    SellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    MatSnackBarModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

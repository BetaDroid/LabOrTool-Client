import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DistributorComponent } from './inventory/distributor/distributor.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

import { ConnectionService } from './connection.service';
import { LoginService } from './login/login.service';
import { DistributorService } from './inventory/distributor/distributor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DistributorComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    SearchComponent,
    PaginationComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventory/distributors', component: DistributorComponent }
    ])
  ],
  providers: [
    ConnectionService,
    LoginService,
    DistributorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

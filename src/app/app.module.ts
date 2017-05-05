import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DistributorComponent } from './inventory/distributor/distributor.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { AlertComponent } from './alert/alert.component';

import { ConnectionService } from './connection.service';
import { LoginService } from './login/login.service';
import { DistributorService } from './inventory/distributor/distributor.service';
import { AlertService } from './alert/alert.service';
import { UserComponent } from './user/user.component';
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import {ManufacturerService} from "./inventory/manufacturer/manufacturer.service";
import { LocationComponent } from './inventory/location/location.component';
import { FootprintComponent } from './inventory/footprint/footprint.component';
import { CategoryComponent } from './inventory/category/category.component';
import { ComponentComponent } from './inventory/component/component.component';
import { CategoryParamTypeComponent } from './inventory/category-param-type/category-param-type.component';
import { ComponentParamComponent } from './inventory/component-param/component-param.component';
import { ViewDistributorComponent } from './inventory/distributor/view-distributor/view-distributor.component';
import { AddDistributorComponent } from './inventory/distributor/add-distributor/add-distributor.component';

@NgModule({
  declarations: [
    AppComponent,
    DistributorComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    PaginationComponent,
    DashboardComponent,
    LogoutComponent,
    AlertComponent,
    UserComponent,
    ManufacturerComponent,
    LocationComponent,
    FootprintComponent,
    CategoryComponent,
    ComponentComponent,
    CategoryParamTypeComponent,
    ComponentParamComponent,
    ViewDistributorComponent,
    AddDistributorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'inventory/distributors', component: DistributorComponent },
      { path: 'inventory/distributors/add', component: AddDistributorComponent },
      { path: 'inventory/distributors/view/:id', component: ViewDistributorComponent },
      { path: 'inventory/manufacturers', component: ManufacturerComponent },
      { path: 'users', component: UserComponent }
    ])
  ],
  providers: [
    ConnectionService,
    LoginService,
    AlertService,
    DistributorService,
    ManufacturerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

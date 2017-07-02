import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { ManufacturerComponent } from './inventory/manufacturer/manufacturer.component';
import {ManufacturerService} from './inventory/manufacturer/manufacturer.service';
import { LocationComponent } from './inventory/location/location.component';
import { FootprintComponent } from './inventory/footprint/footprint.component';
import { CategoryComponent } from './inventory/category/category.component';
import { ComponentComponent } from './inventory/component/component.component';
import { CategoryParamTypeComponent } from './inventory/category-param-type/category-param-type.component';
import { ViewDistributorComponent } from './inventory/distributor/view-distributor/view-distributor.component';
import { AddDistributorComponent } from './inventory/distributor/add-distributor/add-distributor.component';
import { AddManufacturerComponent } from './inventory/manufacturer/add-manufacturer/add-manufacturer.component';
import { ViewManufacturerComponent } from './inventory/manufacturer/view-manufacturer/view-manufacturer.component';
import { AddLocationComponent } from './inventory/location/add-location/add-location.component';
import { ViewLocationComponent } from './inventory/location/view-location/view-location.component';
import {LocationService} from './inventory/location/location.service';
import {FootprintService} from './inventory/footprint/footprint.service';
import { AddFootprintComponent } from './inventory/footprint/add-footprint/add-footprint.component';
import { ViewFootprintComponent } from './inventory/footprint/view-footprint/view-footprint.component';
import {CategoryService} from './inventory/category/category.service';
import { AddCategoryComponent } from './inventory/category/add-category/add-category.component';
import { ViewCategoryComponent } from './inventory/category/view-category/view-category.component';
import { AddCategoryParamTypeComponent } from './inventory/category-param-type/add-category-param-type/add-category-param-type.component';
import { ViewCategoryParamTypeComponent } from './inventory/category-param-type/view-category-param-type/view-category-param-type.component';
import {CategoryParamTypeService} from './inventory/category-param-type/category-param-type.service';
import {UnitService} from './inventory/unit/unit.service';
import {PrefixService} from './inventory/prefix/prefix.service';
import { AddComponentComponent } from './inventory/component/add-component/add-component.component';
import { ViewComponentComponent } from './inventory/component/view-component/view-component.component';
import {ComponentParamService} from './inventory/component-param/component-param.service';
import {ComponentService} from './inventory/component/component.service';
import { AddComponentParamComponent } from './inventory/component-param/add-component-param/add-component-param.component';
import { ViewComponentParamComponent } from './inventory/component-param/view-component-param/view-component-param.component';
import {ChartsModule} from 'ng2-charts';
import { ActivityComponent } from './activity/activity.component';
import { NoteComponent } from './note/note.component';
import { ProjectComponent } from './project/project.component';
import { ProductionComponent } from './production/production.component';
import { AddActivityComponent } from './activity/add-activity/add-activity.component';
import { ViewActivityComponent } from './activity/view-activity/view-activity.component';
import { AddNoteComponent } from './note/add-note/add-note.component';
import { AddProductionComponent } from './production/add-production/add-production.component';
import { ViewProductionComponent } from './production/view-production/view-production.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import {ActivityService} from './activity/activity.service';
import {ProductionService} from './production/production.service';
import {ProjectService} from './project/project.service';
import {LoginGuard} from './login/login.guard';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { EditNoteComponent } from './note/edit-note/edit-note.component';
import { AccountComponent } from './user/account/account.component';

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
    ManufacturerComponent,
    LocationComponent,
    FootprintComponent,
    CategoryComponent,
    ComponentComponent,
    CategoryParamTypeComponent,
    ViewDistributorComponent,
    AddDistributorComponent,
    AddManufacturerComponent,
    ViewManufacturerComponent,
    AddLocationComponent,
    ViewLocationComponent,
    AddFootprintComponent,
    ViewFootprintComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddCategoryParamTypeComponent,
    ViewCategoryParamTypeComponent,
    AddComponentComponent,
    ViewComponentComponent,
    AddComponentParamComponent,
    ViewComponentParamComponent,
    ActivityComponent,
    NoteComponent,
    ProjectComponent,
    ProductionComponent,
    AddActivityComponent,
    ViewActivityComponent,
    AddNoteComponent,
    AddProductionComponent,
    ViewProductionComponent,
    AddProjectComponent,
    EditProjectComponent,
    EditNoteComponent,
    AccountComponent,
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
      { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] },
      { path: 'activities', component: ActivityComponent },
      { path: 'activities/add', component: AddActivityComponent },
      { path: 'activities/view/:id', component: ViewActivityComponent },
      { path: 'productions', component: ProductionComponent },
      { path: 'productions/add', component: AddProductionComponent },
      { path: 'productions/view/:id', component: ViewProductionComponent },
      { path: 'notes', component: NoteComponent },
      { path: 'notes/add', component: AddNoteComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'projects/add', component: AddProjectComponent },
      { path: 'inventory/components', component: ComponentComponent },
      { path: 'inventory/components/add', component: AddComponentComponent },
      { path: 'inventory/components/view/:id', component: ViewComponentComponent },
      { path: 'inventory/distributors', component: DistributorComponent },
      { path: 'inventory/distributors/add', component: AddDistributorComponent },
      { path: 'inventory/distributors/view/:id', component: ViewDistributorComponent },
      { path: 'inventory/manufacturers', component: ManufacturerComponent },
      { path: 'inventory/manufacturers/add', component: AddManufacturerComponent },
      { path: 'inventory/manufacturers/view/:id', component: ViewManufacturerComponent },
      { path: 'inventory/locations', component: LocationComponent },
      { path: 'inventory/locations/add', component: AddLocationComponent },
      { path: 'inventory/locations/view/:id', component: ViewLocationComponent },
      { path: 'inventory/footprints', component: FootprintComponent },
      { path: 'inventory/footprints/add', component: AddFootprintComponent },
      { path: 'inventory/footprints/view/:id', component: ViewFootprintComponent },
      { path: 'inventory/categories', component: CategoryComponent },
      { path: 'inventory/categories/add', component: AddCategoryComponent },
      { path: 'inventory/categories/view/:id', component: ViewCategoryComponent },
      { path: 'inventory/category-parameter-types', component: CategoryParamTypeComponent },
      { path: 'inventory/category-parameter-types/add', component: AddCategoryParamTypeComponent },
      { path: 'inventory/category-parameter-types/view/:id', component: ViewCategoryParamTypeComponent },
      { path: 'inventory/component-params/add/:id', component: AddComponentParamComponent },
      { path: 'inventory/component-params/view/:id', component: ViewComponentParamComponent }
    ]),
    ChartsModule
  ],
  providers: [
    ConnectionService,
    LoginService,
    AlertService,
    DistributorService,
    ManufacturerService,
    LocationService,
    FootprintService,
    CategoryService,
    UnitService,
    PrefixService,
    CategoryParamTypeService,
    ComponentParamService,
    ComponentService,
    ActivityService,
    ProductionService,
    ProjectService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

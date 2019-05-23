import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../shared/material.modules";
import { RestaurantRoutingModule } from "./restaurant-routing.module";
import { RestaurantComponent } from "./restaurant.component";
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantAddComponent } from "./restaurant-add/restaurant-add.component";
import { RestaurantEditComponent } from "./restaurant-edit/restaurant-edit.component";
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material';
import { ConfirmDialog } from '../shared/dialog/confirm.dialog';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    ConfirmDialog
  ],
  entryComponents:[
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RestaurantRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class RestaurantModule {}

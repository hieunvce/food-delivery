import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantAddComponent,
    RestaurantEditComponent
  ],
  imports: [CommonModule, RestaurantRoutingModule]
})
export class RestaurantModule {}

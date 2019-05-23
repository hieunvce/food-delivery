import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantComponent } from "./restaurant.component";
import { RestaurantAddComponent } from "./restaurant-add/restaurant-add.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantEditComponent } from "./restaurant-edit/restaurant-edit.component";
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
const restaurantRoutes: Routes = [
  {
    path: "restaurant",
    component: RestaurantComponent,
    data: {
      title: "Restaurants"
    },
    children: [
      {
        path: "list",
        component: RestaurantListComponent,
        data: { title: "List restaurant" }
      },
      {
        path: "add",
        component: RestaurantAddComponent,
        data: { title: "Add restaurant" }
      },
      {
        path: ":id",
        component: RestaurantDetailComponent
      },
      {
        path: ":id/edit",
        component: RestaurantEditComponent,
        data: { title: "Edit restaurant" }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(restaurantRoutes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}

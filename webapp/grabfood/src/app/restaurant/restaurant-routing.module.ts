import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantComponent } from "./restaurant.component";
import { RestaurantAddComponent } from "./restaurant-add/restaurant-add.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantEditComponent } from "./restaurant-edit/restaurant-edit.component";
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
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
      },
      {
        path: ":id/menu",
        component: MenuListComponent,
        data: { title: "List menu" }
      },
      {
        path: ":id/menu/:product_id",
        component: MenuDetailComponent,
        data: { title: "Product detail" }
      },
      {
        path: ":id/menu-add",
        component: MenuAddComponent,
        data: { title: "Product add" }
      },
      {
        path: ":id/menu/:product_id/edit",
        component: MenuEditComponent,
        data: { title: "Product edit" }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(restaurantRoutes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}

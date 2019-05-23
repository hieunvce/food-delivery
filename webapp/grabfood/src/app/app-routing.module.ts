import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent,
    data: { title: "Home" }
  },
  { path: "about", component: AboutComponent, data: { title: "About" } },
  { path: "contact", component: ContactComponent, data: { title: "Contact" } },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  {
    path: "restaurant",
    redirectTo: "restaurant/list", pathMatch: "full" ,
    data: { title: "Restaurants" }
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

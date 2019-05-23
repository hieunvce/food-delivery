import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RestaurantModule } from "./restaurant/restaurant.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ProductComponent } from "./product/product.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./shared/material.modules";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RestaurantDetailComponent } from "./restaurant/restaurant-detail/restaurant-detail.component";
import { RestaurantAddComponent } from "./restaurant/restaurant-add/restaurant-add.component";
import { RestaurantEditComponent } from "./restaurant/restaurant-edit/restaurant-edit.component";
import { RestaurantListComponent } from "./restaurant/restaurant-list/restaurant-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestaurantComponent,
    ProductComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomepageComponent,
    NavbarComponent,
    RestaurantDetailComponent,
    RestaurantAddComponent,
    RestaurantEditComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestaurantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

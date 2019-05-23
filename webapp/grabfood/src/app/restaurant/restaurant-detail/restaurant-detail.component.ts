import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RestaurantapiService } from "../service/restaurantapi.service";
import { Restaurant } from "../service/restaurant.schema";

@Component({
  selector: "app-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
  styleUrls: ["./restaurant-detail.component.scss"]
})
export class RestaurantDetailComponent implements OnInit {
  
  constructor(
    
  ) {}

  ngOnInit() {
    
  }
}

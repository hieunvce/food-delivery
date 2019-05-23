import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {Restaurant} from './service/restaurant.schema'
import {RestaurantapiService} from './service/restaurantapi.service';
@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.scss"]
})
export class RestaurantComponent implements OnInit {
  private restaurants: Restaurant[];
  private isLoadingResults=true;
  displayedColumns: string[] = ['Img','Name','Address','Action'];

  constructor(private router: Router,private api: RestaurantapiService) {}

  ngOnInit() {
    if (this.api.isLogedIn == false){
      this.router.navigate(["login"]);
    }
    this.api.getRestaurants().subscribe(res => {
      this.restaurants = res.data;
      console.log(this.restaurants);
      this.isLoadingResults = false;
    },err=>{
      console.log(err);
      this.isLoadingResults=false;
    });
  }
}

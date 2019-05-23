import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../service/restaurant.schema';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantapiService } from '../service/restaurantapi.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: "app-restaurant-add",
  templateUrl: "./restaurant-add.component.html",
  styleUrls: ["./restaurant-add.component.scss"]
})
export class RestaurantAddComponent implements OnInit {
  private restaurant: Restaurant;
  private restaurantForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private api: RestaurantapiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      img: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.addRestaurant(form).subscribe(
      res => {
        this.restaurant = res;
        this.router.navigate(["/restaurant/list"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}

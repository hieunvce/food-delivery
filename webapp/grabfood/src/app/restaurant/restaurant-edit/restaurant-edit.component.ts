import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RestaurantapiService } from "../service/restaurantapi.service";
import { Restaurant } from "../service/restaurant.schema";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";
import { MatDialog } from "@angular/material";
import { ConfirmDialog } from "../../shared/dialog/confirm.dialog";

@Component({
  selector: "app-restaurant-edit",
  templateUrl: "./restaurant-edit.component.html",
  styleUrls: ["./restaurant-edit.component.scss"]
})
export class RestaurantEditComponent implements OnInit {
  private restaurant: Restaurant;
  private isLoadingResults = true;
  private restaurantForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private api: RestaurantapiService,
    private router: Router,
    private formBuilder: FormBuilder,
    public deleteDialog: MatDialog
  ) {}

  getRestaurant(id) {
    this.api.getRestaurant(id).subscribe(restaurant => {
      this.restaurant = restaurant;
      this.restaurantForm.setValue({
        name: this.restaurant.name,
        address: this.restaurant.address,
        img: this.restaurant.img
      });
      this.isLoadingResults = false;
    });
  }

  ngOnInit() {
    this.restaurantForm = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      img: [null]
    });
    this.getRestaurant(this.route.snapshot.params["id"]);
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateRestaurant(this.restaurant._id, form).subscribe(
      res => {
        this.restaurant = res;
        this.isLoadingResults = false;
        this.router.navigate(["/restaurant/list"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

  openDialog(id): void {
    const dialogRef = this.deleteDialog.open(ConfirmDialog, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe((data)=>{
      if (data == true){
        this.deleteRestaurant(id);
      }
    });
  }

  deleteRestaurant(id) {
    this.api.deleteRestaurant(id).subscribe(
      restaurant => {
        this.isLoadingResults = false;
        this.router.navigate(["/restaurant/list"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

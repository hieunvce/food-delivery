import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { Product } from "../service/product.schema";
import { ProductapiService } from "../service/productapi.service";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})
export class MenuListComponent implements OnInit {
  private products: Product[];
  private restaurantId: string;
  private isLoadingResults = true;
  displayedColumns: string[] = [
    "Img",
    "Name",
    "Description",
    "Price",
    "Category",
    "Action"
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ProductapiService
  ) {}

  ngOnInit() {
    this.restaurantId = this.route.snapshot.params["id"];
    console.log("restaurant id: " + this.restaurantId);
    if (this.api.isLogedIn == false) {
      this.router.navigate(["login"]);
    }
    this.api.getProductsByRestaurantId(this.restaurantId).subscribe(
      res => {
        this.products = res.data;
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}

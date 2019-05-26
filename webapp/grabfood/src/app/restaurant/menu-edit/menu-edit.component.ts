import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product.schema';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductapiService } from '../service/productapi.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialog } from "../../shared/dialog/confirm.dialog";

@Component({
  selector: "app-menu-edit",
  templateUrl: "./menu-edit.component.html",
  styleUrls: ["./menu-edit.component.scss"]
})
export class MenuEditComponent implements OnInit {
  private product: Product;
  private isLoadingResults = true;
  private productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private api: ProductapiService,
    private router: Router,
    private formBuilder: FormBuilder,
    public deleteDialog: MatDialog
  ) {}

  getProduct(id) {
    this.api.getProduct(id).subscribe(product => {
      this.product = product;
      this.productForm.setValue({
        restaurantId: product.restaurantId,
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        category: this.product.category,
        img: this.product.img
      });
      this.isLoadingResults = false;
    });
  }
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      restaurantId: [null],
      name: [null, Validators.required],
      price: [null, Validators.required],
      description: [null],
      category: [null],
      img: [null]
    });
    this.getProduct(this.route.snapshot.params["product_id"]);
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduct(this.product._id, form).subscribe(
      res => {
        this.product = res;
        this.isLoadingResults = true;
        this.router.navigate([
          "/restaurant",
          this.product.restaurantId,
          "menu"
        ]);
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

    dialogRef.afterClosed().subscribe(data => {
      if (data == true) {
        this.deleteProduct(id);
      }
    });
  }

  deleteProduct(id) {
    this.api.deleteProduct(id).subscribe(
      restaurant => {
        this.isLoadingResults = false;
        this.router.navigate([
          "/restaurant",
          this.product.restaurantId,
          "menu"
        ]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
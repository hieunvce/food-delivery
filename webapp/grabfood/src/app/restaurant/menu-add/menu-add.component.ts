import { Component, OnInit } from '@angular/core';
import { Product } from '../service/product.schema';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductapiService } from '../service/productapi.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  private restaurantId: string;
  private product: Product;
  private productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private api: ProductapiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.restaurantId = this.route.snapshot.params["id"];
    this.productForm = this.formBuilder.group({
      restaurantId: [this.restaurantId],
      name: [null,Validators.required],
      price: [null,Validators.required],
      description: [null],
      category:[null],
      img: [null],
    });
  }

  onFormSubmit(form: NgForm){
    this.api.addProduct(form).subscribe(
      res=>{
        this.product = res;
        this.router.navigate([
          "/restaurant",
          this.product.restaurantId,
          "menu"
        ]);
      },
      err=>{
        console.log(err);
      }
    );
  }
}

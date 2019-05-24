import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import {Product} from "./product.schema";

const apiUrl = "http://localhost:3030/products";

@Injectable({
  providedIn: "root"
})
export class ProductapiService {
  private accessToken = "";
  private httpOptions = {};

  isLogedIn = true;
  constructor(private http: HttpClient) {
    this.accessToken = localStorage.getItem("accessToken");
    if (this.accessToken == undefined || this.accessToken == "") {
      this.isLogedIn = false;
    }
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.accessToken
      })
    };
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProductsByRestaurantId(restaurantId): Observable<any> {
    let getUrl = apiUrl + "?restaurantId=" + restaurantId;
    return this.http.get<any>(getUrl).pipe(
      tap(res => {
        console.log("fetched products");
      }),
      catchError(this.handleError("getProducts", []))
    );
  }

  getProduct(id: string): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`fetched Product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  addProduct(Product): Observable<Product> {
    return this.http
      .post<Product>(apiUrl, Product, this.httpOptions)
      .pipe(
        tap((Product: Product) =>
          console.log(`added Product w/ id=${Product._id}`)
        ),
        catchError(this.handleError<Product>("addProduct"))
      );
  }

  updateProduct(id, Product): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Product, this.httpOptions).pipe(
      tap(_ => console.log(`updated Product id=${id}`)),
      catchError(this.handleError<any>("updateProduct"))
    );
  }

  deleteProduct(id): Observable<Product> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Product id=${id}`)),
      catchError(this.handleError<Product>("deleteProduct"))
    );
  }

  uploadImage(file: File): any {}
}

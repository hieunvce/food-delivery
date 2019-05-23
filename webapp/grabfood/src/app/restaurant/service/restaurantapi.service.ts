import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpInterceptor,
  HttpResponse
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { Restaurant } from "./restaurant.schema";

const apiUrl = "http://localhost:3030/restaurants";

@Injectable({
  providedIn: "root"
})
export class RestaurantapiService {
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

  getRestaurants(): Observable<any> {
    return this.http.get<any>(apiUrl).pipe(
      tap(res => {
        console.log("fetched restaurants");
      }),
      catchError(this.handleError("getRestaurants", []))
    );
  }

  getRestaurant(id: string): Observable<Restaurant> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      tap(_ => console.log(`fetched Restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>(`getRestaurant id=${id}`))
    );
  }

  addRestaurant(Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(apiUrl, Restaurant, this.httpOptions).pipe(
      tap((Restaurant: Restaurant) =>
        console.log(`added Restaurant w/ id=${Restaurant._id}`)
      ),
      catchError(this.handleError<Restaurant>("addRestaurant"))
    );
  }
  
  updateRestaurant(id, Restaurant): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, Restaurant, this.httpOptions).pipe(
      tap(_ => console.log(`updated Restaurant id=${id}`)),
      catchError(this.handleError<any>("updateRestaurant"))
    );
  }

  deleteRestaurant(id): Observable<Restaurant> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Restaurant>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted Restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>("deleteRestaurant"))
    );
  }
  
}

import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "http://localhost:3030/authentication";

@Injectable({
  providedIn: "root"
})
export class UserapiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to logging service
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  authenticate(email: string, password: string): Observable<any> {
    const authenticateBody = {
      "strategy": "local",
      "email": email,
      "password": password
    };
    return this.http.post<any>(apiUrl,authenticateBody,httpOptions).pipe(
      tap(accessToken => console.log("Fetched access token")),
      catchError(this.handleError("login", []))
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserapiService } from "./service/userapi.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  accessToken: string;
  email: string;
  password: string;
  isLoadingResults = true;
  loginNotify = "";
  constructor(private router: Router, private api: UserapiService) {}

  ngOnInit() {
    this.accessToken = localStorage.getItem("accessToken");
    if (this.accessToken != undefined && this.accessToken != "") {
      this.router.navigate(["restaurant"]);
    }
  }

  login() {
    if (
      this.email != undefined &&
      this.email != "" &&
      this.password != undefined &&
      this.password != ""
    ) {
      this.api.authenticate(this.email, this.password).subscribe(
        res => {
          this.accessToken = res.accessToken;
          localStorage.setItem("accessToken", this.accessToken);
          this.isLoadingResults = false;
          if (this.accessToken != undefined) {
            this.router.navigate(["restaurant"]);
          } else {
            this.loginNotify = "Incorrect email or password!";
          }
        },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
    } else {
      this.loginNotify = "Please enter email and password!";
    }
  }

  logout() {
    localStorage.removeItem("accessToken");
  }
}

/**
 * Created by Dell on 4/25/2017.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";
import "./login.component.scss";
@Component({
    selector: 'my-login',
    templateUrl: 'login.component.html',
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(private activatedRouter: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) {
    }

    ngOnInit(): void {
        //    reset login status
        this.authenticationService.logout();

        //    get return url from route params
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'] || '/';
    }


    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            )
    }

}
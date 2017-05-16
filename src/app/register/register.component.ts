/**
 * Created by Dell on 4/25/2017.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";
@Component({
    selector: 'my-register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(private router: Router, private userService: UserService, private alertService: AlertService) {
    }

    ngOnInit(): void {
    }

    register() {
        this.loading = true;
        this.userService.create(this.model).subscribe((data) => {
            this.alertService.succes('Register success', true);
            this.router.navigate(['/login']);
        }, (error) => {
            this.alertService.error(error);
            this.loading = false;
        });

    }

}

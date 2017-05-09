/**
 * Created by Dell on 4/25/2017.
 */

import {Component, OnInit} from "@angular/core";
import {User} from "../models/User";
import {UserService} from "../services/user.service";
import {CarouselResponse} from "../models/CarouselResponse";
import {CarouselService} from "../services/carousel.service";
import {Carousel} from "../models/Carousel";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AlertService} from "../services/alert.service";

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import "./carousel.scss";
@Component({ 
    selector: 'my-home', 
    templateUrl: './home.component.html',
     providers: [{provide: CarouselConfig, useValue: {interval: 6500, noPause: true}}]
}) 

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    carousels: any;

    constructor(private userService: UserService,
                private carouselService: CarouselService,
                private alertService: AlertService) {
    }

    ngOnInit(): void {
        this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
        this.userService.getAll().subscribe(users => {
            this.users = users
        });
        this.carouselService.getCarousel().subscribe(
            carousels => {

                this.carousels = carousels;
                console.log('log ne');
                console.log(this.carousels);
            },
            error => {
                this.alertService.error(error);
            });
    }


}
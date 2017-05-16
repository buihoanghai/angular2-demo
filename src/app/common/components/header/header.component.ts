import { Component, OnInit } from '@angular/core';

import {UserService} from "../../../services/user.service";
import "./header.component.scss";

@Component({
    moduleId: module.id.toString(),
    selector: 'header-layout',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
 	userData:any;
    constructor(private userService:UserService) {

    }

    ngOnInit() {
    	this.userData = this.userService.getData();
    }
}
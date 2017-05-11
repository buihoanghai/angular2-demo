import { Component, OnInit } from '@angular/core';

import {User} from "../../../models/User";
import "./header.component.scss";

@Component({
    moduleId: module.id.toString(),
    selector: 'header-layout',
    templateUrl: 'header.component.html'
})

export class HeaderComponent {
 	currentUser: User;
    constructor() { }

    ngOnInit() {
    	this.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
}
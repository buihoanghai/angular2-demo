import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
@Component({
    moduleId: module.id.toString(),
    selector: 'footer-layout',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
 	userData:any;
    constructor(private userService:UserService) {

    }

    ngOnInit() {
    	this.userData = this.userService.getData();
    }
}
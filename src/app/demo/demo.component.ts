/**
 * Created by Dell on 4/25/2017.
 */

import {Component, OnInit} from "@angular/core";
import "./demo.component.scss";
import {DemoService} from "../services/demo.service";
@Component({ 
    selector: 'demo', 
    templateUrl: './demo.component.html',
}) 

export class DemoComponent {
    model: any ={arr:"[4, 5, 6, 8, 12, 5, 18, 3, -2, 30]"};
    demo: DemoService;
    closestNumber : number =0;
    firstDuplicated : number =0;
    constructor() { 
    	this.demo=new DemoService();
	}

    ngOnInit() {

    }
    findFirstDuplicated() {
     	let arr=JSON.parse(this.model.arr);
     	this.firstDuplicated=this.demo.findFirstDuplicated(arr);

    }
     findClosestNumber() {
     	let arr=JSON.parse(this.model.arr);
     	this.closestNumber=this.demo.findClosestNumber(arr);
    }
}
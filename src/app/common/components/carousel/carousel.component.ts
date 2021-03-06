import { Component, OnInit, Input} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import {Carousel} from "../../../models/Carousel";
import * as carouselConfig from "./carousel.config";
@Component({
    moduleId: module.id.toString(),
    selector: 'carousel',
    templateUrl: 'carousel.component.html'
})
export class CarouselComponent {

    @Input() carousel:Carousel;
    ID:number;

    constructor() {  
    }

    ngOnInit() {
        let ID = this.ID=+new Date();
        let carousel=this.carousel;
        let config=carouselConfig.responsive;
   
        setTimeout(function(){

            $('#' + ID).slick(config);
        });
    		
    }
}
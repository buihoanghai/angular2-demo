import { Component, OnInit, Input} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import "./carousel.banner.scss";
import * as carouselConfig from "./carousel.config";
@Component({
    moduleId: module.id.toString(),
    selector: 'carousel-banner',
    templateUrl: 'carousel.banner.component.html'
})
export class CarouselBannerComponent {

    ID:number;

    constructor() {  
    }

    ngOnInit() {
        let ID = this.ID=+new Date();
        let config=carouselConfig.banner;
        $('.carousel-banner').slick(config);
    		
    }
}
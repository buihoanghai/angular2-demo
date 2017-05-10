import { Component, OnInit, Input} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import {Carousel} from "../../models/Carousel";
import "./carousle.scss";
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
        setTimeout(function(){
            $('#' + ID).slick({
                 dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 6,
                  slidesToScroll: 6,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
            });
        });
    		
    }
}
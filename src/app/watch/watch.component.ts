/**
 * Created by Dell on 4/25/2017.
 */

import {Component, OnInit} from "@angular/core";
import "./watch.component.scss";
import {CarouselService} from "../services/carousel.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Recommendation} from "../models/Recommendation";
import {Carousel} from "../models/Carousel";
@Component({ 
    selector: 'watch', 
    templateUrl: './watch.component.html',
}) 

export class WatchComponent {
    video:Recommendation;
    carousel: Carousel;
    player: any;
    constructor(
        private carouselService: CarouselService, 
        private route: ActivatedRoute,
        private router: Router
        ) {  
	}

    ngOnInit() {
        this.route.params.forEach(params => {
                    let contentId = params["id"];
                    this.loadVideo(contentId);
            })
    }
    loadVideo(contentId:string){
        let vm=this;
        var dashjs=window['dashjs'];
        vm.carouselService.getCarousel().subscribe(
            carousels => {
                carousels.map(carousel => {
                    carousel.recommendations.map(video =>{
                        if(video.contentId== contentId){
                            vm.carousel=carousel;
                            vm.video=video;
                            var url = video.webPlayURL;
                            setTimeout(function(){
                                if(!this.player || this.player.getSource()===""){
                                    this.player = dashjs.MediaPlayer().create();
                                    var element=document.querySelector("#videoPlayer");
                                    this.player.initialize(element, url, true);
                                }else{
                                    this.player.attachSource(url);
                                }
                            });
                        }
                    });
                });
            },
            error => {
        });
    }
}
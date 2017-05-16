import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[imgload]'
})

export class ImgLoad {
	 @Input() "imgload":string;
	 element:ElementRef;
    constructor(el: ElementRef) { 
    	this.element = el;
    }

    ngOnInit() {
    	let element=this.element.nativeElement;
    	const IMAGE_NOT_FOUND = require('../../../../assets/img/image-not-found.png');
    	const IMAGE_LOADING = require('../../../../assets/img/image-not-found.png'); 
	  	console.log(element);
        element.src = IMAGE_LOADING;
        var url = this.imgload;
        setTimeout(function(){
	 		var downloadingImage = new Image();
	        downloadingImage.onload = function () {
	          element.src = url;
	        };
	        downloadingImage.onerror = function () {
	          element.src =IMAGE_NOT_FOUND;
	        };
	        downloadingImage.src = url;
        },2000);//setTimeout for demo waiting loading img
       
    }
}
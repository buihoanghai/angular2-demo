/**
 * Created by Dell on 5/4/2017.
 */
import {Injectable} from "@angular/core";
import {Carousel} from "../models/Carousel";
import {Http, Response} from "@angular/http";
import {CarouselConstant} from "../constant/carousel.constant";
import {CarouselResponse} from "../models/CarouselResponse";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
@Injectable()
export class CarouselService {

    constructor(private http: Http) {
    }

    getCarousel(): Observable<Carousel[]> {
        return this.http.get('/api/carousel').map((response: Response) => this.extractData(response));
    }

    private extractData(response: Response): Carousel[] {
        console.log(response.json().data.carousel);
        return response.json().data.carousel || {};
    }

}


/**
 * Created by Dell on 4/25/2017.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {NavigationStart, Router} from "@angular/router";
import {Observable} from "rxjs"
@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        //clear alert message on route change
        router.events.subscribe(event=>{
            if (event instanceof NavigationStart){
                if(this.keepAfterNavigationChange){
                    this.keepAfterNavigationChange = false;
                }
            }else{
                //clear message
                this.subject.next();
            }


        });

    }

    succes(message: string, keepAfterNavigationChange=false) {
        this.keepAfterNavigationChange=keepAfterNavigationChange;
        this.subject.next({type: 'success', text: message});
    }

    error(message: string, keepAfterNavigationChange=false) {
        this.keepAfterNavigationChange=keepAfterNavigationChange;
        this.subject.next({type: 'error', text: message});
    }

    getMessage() : Observable<any>{
        return this.subject.asObservable();
    }
}



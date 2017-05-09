/**
 * Created by Dell on 4/25/2017.
 */

import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({username: username,password: password}))
            .map((response: Response) => {
            let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
        })
    }

    logout() {
        window.localStorage.removeItem('currentUser');

    }
}
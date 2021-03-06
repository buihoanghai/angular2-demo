﻿import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/index';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    userData: any = {};
    constructor(private http: Http) {
        this.userData.currentUser = JSON.parse(window.localStorage.getItem('currentUser'));
    }
    getData(){
        return this.userData;
    }
    setCurrentUser(currentUser:User){
        this.userData.currentUser = currentUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    logout(){
        this.userData.currentUser= undefined;
        window.localStorage.removeItem('currentUser');
    }
    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {HomeComponent} from "./home/home.component";
import {AlertService} from "./services/alert.service";
import {AuthenticationService} from "./services/authentication.service";
import {UserService} from "./services/user.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./guards/auth.guard";
import {AlertComponent} from "./directives/alert.component";
import {CarouselService} from "./services/carousel.service";
import {CarouselModule} from "ngx-bootstrap";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CarouselModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
    ],
    providers: [
        AlertService,
        AuthenticationService,
        UserService,
        AuthGuard,
        CarouselService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
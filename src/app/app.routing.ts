import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {DemoComponent} from "./demo/demo.component";
import {WatchComponent} from "./watch/watch.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'demo',component: DemoComponent},
    {path: 'watch/:id',component: WatchComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
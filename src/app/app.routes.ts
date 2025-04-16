import { Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";
import {ClientsComponent} from "./views/clients/clients.component";
import {RoomsComponent} from "./views/rooms/rooms.component";
import {AdminComponent} from "./views/admin/admin.component";

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'clients',
        component:ClientsComponent
      },
      {
        path:'rooms',
        component:RoomsComponent
      },
      {
        path:'admin',
        component:AdminComponent
      }
    ]
  },
  {
    path:'**',
    loadComponent: ()=> import('./views/page-not-found/page-not-found.component')
      .then(modulo => modulo.PageNotFoundComponent)
  }
];

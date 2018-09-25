import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import {HomeGuard} from "../route-guard/home/home.guard";

import {HomeComponent} from "../home/home.component";
import {LoginComponent} from "../login/login.component";
import {UsersComponent} from "../users/users.component";
import {TeamsComponent} from "../teams/teams.component";
import {UpdateTeamsComponent} from "../teams/update-teams/update-teams.component";
import {CreateTeamsComponent} from "../teams/create-teams/create-teams.component";


const routeConfig : Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [
      HomeGuard
    ],
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
        children: [
          {
            path: 'update-teams',
            component: UpdateTeamsComponent,
          },
          {
            path: 'create-teams',
            component: CreateTeamsComponent,
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig),
    FormsModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    UsersComponent,
    TeamsComponent,
    UpdateTeamsComponent,
    CreateTeamsComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HomeGuard
  ]
})
export class RouteModule { }

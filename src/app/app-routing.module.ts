import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { AddGpsComponent } from './add-gps/add-gps.component';
import { ListGpsComponent } from './list-gps/list-gps.component';
import { HomeComponent } from './home/home.component';
import { DistanceComponent } from './distance/distance.component';

const routes:Routes = [
    {path:'add-gps', component:AddGpsComponent},
    {path:'list-gps', component:ListGpsComponent},
    {path:'home',component:HomeComponent},
  { path: 'distance', component: DistanceComponent },
    {path:'',redirectTo:'home',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

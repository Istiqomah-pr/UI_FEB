import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulogComponent } from './bulog/bulog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { PenjualanComponent } from './penjualan/penjualan.component';
import { PembelianComponent } from './pembelian/pembelian.component';
import { MaterialDesign } from '../material/material';
import { ImportComponent } from '../add/import/import.component';



const routes: Routes=[
  {
    path:'',
    component : BulogComponent,
    children:[
      {
    path :'dashboard',
    component: DashboardComponent
  },
  {
    path :'penjualan',
    component: PenjualanComponent
  },
  {
    path :'pembelian',
    component: PembelianComponent
  }
]
  }
  
]

@NgModule({
  declarations: [
    BulogComponent,
    DashboardComponent,
    PenjualanComponent,
    PembelianComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class BulogModule { }

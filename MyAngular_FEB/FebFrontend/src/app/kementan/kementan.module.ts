import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KementanComponent } from './kementan.component';
import { BataspenyimpananComponent } from './bataspenyimpanan/bataspenyimpanan.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';

const routes: Routes = [
  {
    path : '',
    component : KementanComponent,
    children : [
      {
        path : 'bataspenyimpanan',
        component: BataspenyimpananComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    KementanComponent,
    BataspenyimpananComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class KementanModule { }

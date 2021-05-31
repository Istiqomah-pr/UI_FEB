import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KemendagComponent } from './kemendag.component';
import { HargapemerintahComponent } from './hargapemerintah/hargapemerintah.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';

const routes: Routes = [
  {
    path : '',
    component : KemendagComponent,
    children : [
      {
        path : 'hargapemerintah',
        component: HargapemerintahComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    KemendagComponent,
    HargapemerintahComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class KemendagModule { }

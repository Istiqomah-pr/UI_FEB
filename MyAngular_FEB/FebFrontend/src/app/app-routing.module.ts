import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportComponent } from './add/import/import.component';
import { LoginComponent } from './auth/login/login.component';
import { BulogComponent } from './bulog/bulog/bulog.component';
import { DashboardComponent } from './bulog/dashboard/dashboard.component';

const routes: Routes = [
  {
    path :'login',
    component:LoginComponent
  },
  {
    path:'bulog',
    loadChildren: () => import('./bulog/bulog.module').then(m => m.BulogModule)
  },
  {
    path:'kemendag',
    loadChildren: () => import('./kemendag/kemendag.module').then(m => m.KemendagModule)
  },
  {
    path:'kementan',
    loadChildren: () => import('./kementan/kementan.module').then(m => m.KementanModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

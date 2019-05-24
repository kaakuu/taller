import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from './modules/layout/layout.module';




  const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ];


@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

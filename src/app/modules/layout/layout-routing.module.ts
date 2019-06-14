import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'feed', loadChildren:  '../feed/feed.module#FeedModule' },
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },
      { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarModule' },
      { path: 'data', loadChildren: '../tables-data/tables-data.module#TablesDataModule' },
      { path: 'onpush', loadChildren: '../change-detection/change-detection.module#ChangeDetectionModule' },
      { path: 'lazy-images', loadChildren: '../lazy-images/lazy-images.module#LazyImagesModule' },
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', loadChildren: '../login/login.module#LoginModule' },  
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
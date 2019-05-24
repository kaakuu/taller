import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { NzLayoutModule } from 'ng-zorro-antd';
import { NzBreadCrumbModule } from 'ng-zorro-antd'; 
import { NzMenuModule } from 'ng-zorro-antd';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginModule } from '../../modules/login/login.module';



import { LoginLayoutComponent } from './login-layout/login-layout.component';



@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, LoginLayoutComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    LayoutRoutingModule,
    LoginModule
  ],
  exports: [
    MainLayoutComponent,
  ],
})
export class LayoutModule { }

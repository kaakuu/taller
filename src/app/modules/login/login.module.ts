import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd';
import { NzInputModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd';
import {LoginRoutingModule} from './login-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }

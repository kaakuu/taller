
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd';
import { NzBreadCrumbModule } from 'ng-zorro-antd';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es-AR';
registerLocaleData(es);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ],
  exports:[
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class MaterialModule { }

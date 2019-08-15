import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCacheComponent } from './data-cache.component';
import { DataCacheRoutingModule } from './data-cache-routing.module';

@NgModule({
  declarations: [DataCacheComponent],
  imports: [
    DataCacheRoutingModule,
    CommonModule
  ]
})
export class DataCacheModule {

}

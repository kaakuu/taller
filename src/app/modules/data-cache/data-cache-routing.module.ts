import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCacheComponent } from './data-cache.component';

const routes: Routes = [
  {
    path: '',
    component: DataCacheComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCacheRoutingModule { }
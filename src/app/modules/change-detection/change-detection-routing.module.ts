import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LlamadorComponent } from './onpush/llamador';
import { MainComponent } from './main/main.component';
import { CallerComponent } from './default/caller';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      { path: 'onpush', component: LlamadorComponent },  
      { path: 'default', component: CallerComponent },  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }

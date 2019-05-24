import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';



const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        { path: 'feed', component: FeedComponent },  
        { path: 'gallery', component: GalleryComponent },  
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FadeInImageComponent } from './fade-in-image.component';
import { BgImageComponent } from './bg-image.component';
import { DefaultImageComponent } from './default-image.component';
import { PixelatedImageComponent } from './pixelated-image.component';
import { ScrollContainerComponent } from './scroll-container.component';
import { ChangeImageComponent } from './changing-image.component';
import { OnLoadComponent } from './onload.component';
import { ResponsiveImageComponent } from './responsive-image.component';
import { AppComponent } from './app-component.component';

const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
    
    { path: 'change-image', component: ChangeImageComponent },
    { path: 'fade-in-image', component: FadeInImageComponent },
    { path: 'bg-image', component: BgImageComponent },
    { path: 'default-image', component: DefaultImageComponent },
    { path: 'pixelated-image', component: PixelatedImageComponent },
    { path: 'scroll-container', component: ScrollContainerComponent },
    { path: 'on-load', component: OnLoadComponent },
    { path: 'responsive-image', component: ResponsiveImageComponent },
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyImagesRoutingModule { }

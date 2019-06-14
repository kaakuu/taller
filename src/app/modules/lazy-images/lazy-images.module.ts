import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyImagesRoutingModule } from './lazy-images-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { FadeInImageComponent } from './fade-in-image.component';
import { BgImageComponent } from './bg-image.component';
import { DefaultImageComponent } from './default-image.component';
import { PixelatedImageComponent } from './pixelated-image.component';
import { ScrollContainerComponent } from './scroll-container.component';
import { ChangeImageComponent } from './changing-image.component';
import { OnLoadComponent } from './onload.component';
import { ResponsiveImageComponent } from './responsive-image.component';
import { AppComponent } from './app-component.component';




@NgModule({
  declarations: [
    FadeInImageComponent,
    BgImageComponent,
    DefaultImageComponent,
    PixelatedImageComponent,
    ScrollContainerComponent,
    ChangeImageComponent,
    OnLoadComponent,
    ResponsiveImageComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    LazyImagesRoutingModule,
    LazyLoadImageModule
  ]
})
export class LazyImagesModule { }

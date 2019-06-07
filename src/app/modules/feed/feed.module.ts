import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { NzTabsModule } from 'ng-zorro-antd';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NzCommentModule } from 'ng-zorro-antd';
import { NzAvatarModule } from 'ng-zorro-antd';
import { NzListModule } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd';
import { NzGridModule } from 'ng-zorro-antd';
import { NzSkeletonModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeedComponent, MainComponent, GalleryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeedRoutingModule,
    NzTabsModule,
    NzCommentModule,
    NzAvatarModule,
    NzListModule,
    NzFormModule,
    NzButtonModule,
    NzGridModule,
    NzSkeletonModule
  ] 
})
export class FeedModule { }

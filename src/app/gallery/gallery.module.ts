import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRootComponent } from './gallery-root/gallery-root.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';



@NgModule({
  declarations: [
    GalleryRootComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryRootComponent
  ]
})
export class GalleryModule { }

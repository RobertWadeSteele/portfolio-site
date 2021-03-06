import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortraitComponent } from './components/portrait/portrait.component';
import { AboutComponent } from './components/about/about.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';

import { SudokuModule } from './sudoku/sudoku.module';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PortraitComponent,
    AboutComponent,
    NavLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SudokuModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

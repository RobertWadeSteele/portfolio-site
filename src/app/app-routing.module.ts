import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SudokuRootComponent } from './sudoku/sudoku-root/sudoku-root.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'gallery/sudoku', component: SudokuRootComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SudokuRootComponent } from './sudoku/sudoku-root/sudoku-root.component';
import { GalleryRootComponent } from './gallery/gallery-root/gallery-root.component';

const routes: Routes = [
  {path: 'gallery', component: GalleryRootComponent},
  {path: 'gallery/sudoku', component: SudokuRootComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

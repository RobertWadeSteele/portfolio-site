import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuRootComponent } from './sudoku-root/sudoku-root.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    SudokuRootComponent,
    CellComponent,
    BoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SudokuRootComponent
  ]
})
export class SudokuModule { }
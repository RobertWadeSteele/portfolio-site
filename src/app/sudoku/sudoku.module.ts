import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuRootComponent } from './sudoku-root/sudoku-root.component';
import { CellComponent } from './cell/cell.component';
import { BoxComponent } from './box/box.component';
import { BoardComponent } from './board/board.component';



@NgModule({
  declarations: [
    SudokuRootComponent,
    CellComponent,
    BoxComponent,
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

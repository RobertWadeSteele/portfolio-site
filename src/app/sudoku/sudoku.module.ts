import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuBoardComponent } from './sudoku-board/sudoku-board.component';
import { SudokuRootComponent } from './sudoku-root/sudoku-root.component';
import { SudokuCellComponent } from './sudoku-cell/sudoku-cell.component';



@NgModule({
  declarations: [
    SudokuBoardComponent,
    SudokuRootComponent,
    SudokuCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SudokuRootComponent
  ]
})
export class SudokuModule { }

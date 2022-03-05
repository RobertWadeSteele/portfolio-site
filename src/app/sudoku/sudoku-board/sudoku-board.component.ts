import { Component, OnInit } from '@angular/core';
// import * as internal from 'stream';

import { Cell } from '../sudoku-cell/Cell'
import { SudokuCellComponent } from '../sudoku-cell/sudoku-cell.component';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent implements OnInit {

  sectionSize: number = 9;
  cells!: Cell[];
  constructor() { }

  ngOnInit(): void {
    this.cells = [];
    for (let row = 1; row < this.sectionSize; row++) {
      for (let col = 1; col < this.sectionSize; col++) {
        let newCell = new SudokuCellComponent();
        newCell.setPosition(row, col);
        this.cells.push(newCell);
      }
    }
  }

}

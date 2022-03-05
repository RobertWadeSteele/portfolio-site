import { Component, OnInit, Input } from '@angular/core';
import { Cell } from './Cell';

@Component({
  selector: 'app-sudoku-cell',
  templateUrl: './sudoku-cell.component.html',
  styleUrls: ['./sudoku-cell.component.scss']
})
export class SudokuCellComponent implements OnInit {

  @Input() cell!: Cell;
  row!: number;
  col!: number;
  num!: number;

  constructor() { }

  ngOnInit(): void {
  }

  setPosition(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.num = 0;
  }
}

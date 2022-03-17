import { Component, OnInit } from '@angular/core';
import { Cell } from '../model/Cell';
import { SudokuBacktracker } from '../model/SudokuBacktracker';
import { SudokuGame } from '../model/SudokuGame'

@Component({
  selector: 'app-sudoku-root',
  templateUrl: './sudoku-root.component.html',
  styleUrls: ['./sudoku-root.component.scss']
})
export class SudokuRootComponent implements OnInit {

  game!: SudokuGame;

  constructor() { }

  ngOnInit(): void {
    this.game = new SudokuGame(undefined, 9);
  }

  backtrackSolve(): void {
    let backtracker: SudokuBacktracker = new SudokuBacktracker(this.game);
    backtracker.solve();
  }
}

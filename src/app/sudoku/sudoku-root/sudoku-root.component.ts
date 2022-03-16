import { Component, OnInit } from '@angular/core';
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
    this.game = new SudokuGame()
  }

}

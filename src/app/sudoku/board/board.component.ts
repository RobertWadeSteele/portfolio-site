import { Component, OnInit } from '@angular/core';
import { SudokuGame } from '../SudokuGame';
import { Cell } from '../Cell';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  game!: SudokuGame;
  styleTemplate!: { [klass: string]: any; } | null;

  constructor() { }

  ngOnInit(): void {
    this.game = new SudokuGame();
    this.styleTemplate = {
      "grid-template-rows": `repeat(${this.game.gameSize}, 1fr)`,
      "grid-template-columns": `repeat(${this.game.gameSize}, 1fr)`}
  }

  getGridDimensions (): { [klass: string]: any; } | null {
    return this.styleTemplate;
  }

  getCells(): Cell[] {
    return this.game.getCells();
  }
}

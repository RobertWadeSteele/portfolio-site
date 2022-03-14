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
  }
  
  getGridDimensions (): { [klass: string]: any; } | null {
    return {
      "grid-template-rows": `repeat(${this.game.gameSize}, 1fr)`,
      "grid-template-columns": `repeat(${this.game.gameSize}, 1fr)`
    }
  }

  getCells(): Cell[] {
    return this.game.getCells();
  }

  getCellBorderStyle(cell: Cell): { [klass: string]: any; } | null {
    let squareSize = Math.sqrt(this.game.getGameSize());
    let row = cell.getRowIndex(), col = cell.getColumnIndex();
    return {
      "border-left": `${col % squareSize == 0 ? "2px" : "1px"}`,
      "border-right": `${col % squareSize == squareSize - 1 ? "2px" : "1px"}`,
      "border-top": `${row % squareSize == 0 ? "2px" : "1px"}`,
      "border-bottom": `${row % squareSize == squareSize - 1 ? "2px" : "1px"}`,
      "border-style": "solid"
    }
  }
}

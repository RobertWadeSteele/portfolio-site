import { Component, OnInit } from '@angular/core';
import { Box } from '../Box';
import { Cell } from '../Cell';
import { SudokuGame } from '../SudokuGame';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  game!: SudokuGame;
  boxes!: Cell[][];

  constructor() { }

  ngOnInit(): void {
    this.game = new SudokuGame();
    let gridSize = Math.sqrt(this.game.gameSize);

    this.boxes = [];

    for (let row = 0; row < this.game.gameSize; row++) {
      for (let col = 0; col < this.game.gameSize; col++) {
        let squareIndex = Math.floor(row / gridSize) * gridSize + Math.floor(col / gridSize);
        if (this.boxes[squareIndex] == undefined) {
          this.boxes.push([]);
        }
        this.boxes[squareIndex].push(this.game.cells[row][col]);
      }
    }
  }

  getGridDimensions (): { [klass: string]: any; } | null {
    return {
      "grid-template-rows": `repeat(${Math.sqrt(this.game.gameSize)}, 1fr)`,
      "grid-template-columns": `repeat(${Math.sqrt(this.game.gameSize)}, 1fr)`}
  }
}

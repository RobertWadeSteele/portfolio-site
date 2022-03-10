import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../Cell';
import { SudokuGame } from '../SudokuGame';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() cells!: Cell[];
  @Input() game!: SudokuGame;

  constructor() { }

  ngOnInit(): void {
  }

  getStyles(): { [klass: string]: any; } | null {
    return {
      "grid-template-rows": `repeat(${Math.sqrt(this.game.gameSize)}, 1fr)`,
      "grid-template-columns": `repeat(${Math.sqrt(this.game.gameSize)}, 1fr)`}
  }
}

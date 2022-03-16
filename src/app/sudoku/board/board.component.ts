import { Component, OnInit, Input, HostBinding, ɵɵsetComponentScope } from '@angular/core';
import { SudokuGame } from '../model/SudokuGame';
import { Cell } from '../model/Cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() game!: SudokuGame;

  @HostBinding('style.grid-template-rows') nRows!: string;
  @HostBinding('style.grid-template-columns') nCols!: string;

  constructor() { }

  ngOnInit(): void { 
    this.nRows = `repeat(${this.game.getGameSize()}, 1fr)`;
    this.nCols = `repeat(${this.game.getGameSize()}, 1fr)`;
  }

  getCells(): Cell[] {
    return this.game.getCells();
  }
}

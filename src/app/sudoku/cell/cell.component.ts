import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../Cell';
import { SudokuGame } from '../SudokuGame';
@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell!: Cell;
  @Input() boardSize!: number;
  @Output() toggleSelectedCell = new EventEmitter<CellComponent>();

  @Output() styleTemplate!: { [klass: string]: any; } | null;

  constructor() { }

  ngOnInit(): void {
    let squareSize = Math.sqrt(this.boardSize);
    this.styleTemplate = {
      "border-left": `${this.cell.getColumnIndex() % squareSize == 0 ? "2px" : "1px"}`,
      "border-right": `${this.cell.getColumnIndex() % squareSize == squareSize - 1 ? "2px" : "1px"}`,
      "border-top": `${this.cell.getRowIndex() % squareSize == 0 ? "2px" : "1px"}`,
      "border-bottom": `${this.cell.getRowIndex() % squareSize == squareSize - 1 ? "2px" : "1px"}`,
      "border-style": "solid"
    }
  }

  onSelect() {
    this.toggleSelectedCell.emit(this);
  }

  getStyle(): { [klass: string]: any; } | null {
    return this.styleTemplate;
  }

  onFocusLost() {
    console.log('Goodbye!');
  }

  onFocusGain() {
    console.log('Hello!');
  }

  onNumberInput(e: KeyboardEvent) {
    if (e.key >= '1' && e.key <= '9') {
      this.cell.setValue(parseInt(e.key));
    }
  }
}

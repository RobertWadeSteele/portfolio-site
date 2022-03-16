import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { Cell } from '../model/Cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell!: Cell;
  @Input() gamesize!: number;

  @HostBinding('style.border-width') border!: string;

  @HostListener('keydown', ['$event'])
  onNumberInput(e: KeyboardEvent): void {
    if (e.key >= '1' && e.key <= '9') {
        this.cell.setValue(parseInt(e.key));
      }
  }

  constructor() { }

  ngOnInit(): void {
    let row = this.cell.getRowIndex(), 
        col = this.cell.getColumnIndex(),
        squareSize = Math.sqrt(this.gamesize);
    this.border = `${row % squareSize == 0 ? "2px" : "1px"} ${col % squareSize == squareSize - 1 ? "2px" : "1px"} ${row % squareSize == squareSize - 1 ? "2px" : "1px"} ${col % squareSize == 0 ? "2px" : "1px"}`;
  }
}

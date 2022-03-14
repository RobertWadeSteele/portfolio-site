import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../Cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell!: Cell;

  constructor() { }

  ngOnInit(): void { }

  onNumberInput(e: KeyboardEvent) {
    if (e.key >= '1' && e.key <= '9') {
      this.cell.setValue(parseInt(e.key));
    }
  }
}

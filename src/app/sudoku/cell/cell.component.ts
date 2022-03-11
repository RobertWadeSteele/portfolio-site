import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../Cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() row!: number;
  @Input() col!: number;
  
  @Input() cell!: Cell;
  @Output() toggleSelectedCell = new EventEmitter<CellComponent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.toggleSelectedCell.emit(this);
  }
}

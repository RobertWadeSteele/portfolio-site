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

  ngOnInit(): void {
  }

}

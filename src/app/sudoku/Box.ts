import { Cell } from './Cell'

export class Box {
    cells: Cell[] = [];

    constructor(cells?: Cell[]) {
        if ( cells !== undefined ) {
            this.cells = cells;
        }
    }

    pushCell(cell: Cell) {
        this.cells.push(cell);
    }
}
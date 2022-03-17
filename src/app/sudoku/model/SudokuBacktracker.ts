import { SudokuAlgorithm } from "./SudokuAlgorithm";
import { Cell } from "./Cell";

export class SudokuBacktracker extends SudokuAlgorithm {

    solve(): boolean {
        let cells: Cell[] = [];
        for (let cell of this.game.getCells()) {
            if (cell.getValue() == undefined) {
                cells.push(cell);
            }
        }
        
        return this.backtrackRecurse(cells, 0);
    }

    backtrackRecurse(cells: Cell[], index: number): boolean {
        if (index >= cells.length) {
            return true;
        }
        let solved: boolean = false;
        for (let value = 1; value <= this.game.getGameSize(); value++) {
            cells[index].setValue(value);
            if (!this.cellConflicts(cells[index])) {
                solved = this.backtrackRecurse(cells, index + 1);
            }
            if (solved) {
                break;
            }
        }
        if (!solved) {
            cells[index].setValue(undefined);
        }
        return solved;
    }
}
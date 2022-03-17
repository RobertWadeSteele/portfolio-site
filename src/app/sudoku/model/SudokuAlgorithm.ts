import { SudokuGame } from './SudokuGame';
import { Cell } from './Cell';

export class SudokuAlgorithm {
    
    game!: SudokuGame;

    constructor(game: SudokuGame) {
        this.game = game;
    }

    cellConflicts(cell: Cell): boolean {
        return this.cellConflictsOnRow(cell) || this.cellConflictsOnColumn(cell) || this.cellConflictsOnSquare(cell);
    }

    cellConflictsOnRow (cell: Cell): boolean {
        for (let column = 0; column < this.game.getGameSize(); column++) {
            let currCell: Cell = this.game.getBoard()[cell.getRowIndex()][column];
            if (currCell != cell && currCell.getValue() == cell.getValue()) {
                return true;
            }
        }
        return false;
    }

    cellConflictsOnColumn (cell: Cell): boolean {
        for (let row = 0; row < this.game.getGameSize(); row++) {
            let currCell = this.game.getBoard()[row][cell.getColumnIndex()];
            if (currCell != cell && currCell.getValue() == cell.getValue()) {
                return true;
            }
        }
        return false;
    }

    cellConflictsOnSquare (cell: Cell): boolean {
        let squareSize: number = Math.sqrt(this.game.getGameSize()),
            rowStart: number = Math.floor(cell.getRowIndex() / squareSize) * squareSize,
            colStart: number = Math.floor(cell.getColumnIndex() / squareSize) * squareSize,
            rowEnd: number = rowStart + squareSize,
            colEnd: number = colStart + squareSize;

        for (let row = rowStart; row < rowEnd; row++) {
            for (let column = colStart; column < colEnd; column++) {
                let currCell = this.game.getBoard()[row][column];
                if (currCell != cell && currCell.getValue() == cell.getValue()) {
                    return true;
                }
            }
        }
        return false;
    }
}
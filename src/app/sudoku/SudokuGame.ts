import { Cell } from './Cell';

export class SudokuGame {

    cells: Cell[] = [];
    board: Cell[][] = [];
    gameSize: number = 9;

    constructor(board?: Cell[][], gameSize?: number) {

        if (gameSize !== undefined) {
            this.setGameSize(gameSize);
        }

        if (board !== undefined) {
            this.board = board;
        } else {
            this.cells = [];
            for (let row = 0; row < this.gameSize; row++) {
                let currRow = [];
                for (let col = 0; col < this.gameSize; col++) {
                    let newCell = new Cell(row, col);
                    currRow.push(newCell);
                    this.cells.push(newCell)
                }
                this.board.push(currRow);
            }
        }
    }

    getCells(): Cell[] {
        return this.cells;
    }

    getCell(row: number, col: number) {
        return this.cells[row * this.gameSize + col];
    }

    getGameSize(): number {
        return this.gameSize;
    }

    setGameSize(gameSize: number): void {
        if ( Math.sqrt(gameSize) == NaN || Math.sqrt(gameSize) ** 2 !== gameSize) {
            throw new Error(`Invalid gameSize: ${gameSize}. Value must be perfect square.`)
        }
        this.gameSize = gameSize;
    }
}


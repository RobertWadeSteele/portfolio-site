import { Cell } from './Cell';

export class SudokuGame {

    cells: Cell[][] = [];
    gameSize: number = 9;

    constructor(cells?: Cell[][], gameSize?: number) {

        if (gameSize !== undefined) {
            this.changeGameSize(gameSize);
        }

        if (cells !== undefined) {
            this.cells = cells;
        } else {
            this.cells = [];
            for (let row = 0; row < this.gameSize; row++) {
                let currRow = [];
                for (let col = 0; col < this.gameSize; col++) {
                    currRow.push(new Cell(Math.floor(Math.random() * this.gameSize + 1)));
                }
                this.cells.push(currRow);
            }
        }
    }

    changeGameSize(gameSize: number): void {
        if ( Math.sqrt(gameSize) == NaN || Math.sqrt(gameSize) ** 2 !== gameSize) {
            throw new Error(`Invalid gameSize: ${gameSize}. Value must be perfect square.`)
        }
        this.gameSize = gameSize;
    }
}


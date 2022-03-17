import { Cell } from './Cell';

export class SudokuGame {

    cells: Cell[] = [];
    board: Cell[][] = [];
    gameSize: number = 9;

    constructor(board?: Cell[][] | undefined, gameSize?: number) {

        if (gameSize !== undefined) {
            this.setGameSize(gameSize);
        }

        if (board !== undefined) {
            this.board = board;
        } else {
            this.generatePuzzle();
            console.log(this.board);
            // this.cells = [];
            // for (let row = 0; row < this.gameSize; row++) {
            //     let currRow = [];
            //     for (let col = 0; col < this.gameSize; col++) {
            //         let newCell = new Cell(row, col);
            //         currRow.push(newCell);
            //         this.cells.push(newCell)
            //     }
            //     this.board.push(currRow);
            // }
        }
    }

    generatePuzzle(): void {
        let board: number[][] =[[2, 0, 0, 5, 0, 7, 4, 0, 6],
                                [0, 0, 0, 0, 3, 1, 0, 0, 0],
                                [0, 0, 0, 0, 0, 0, 2, 3, 0],
                                [0, 0, 0, 0, 2, 0, 0, 0, 0],
                                [8, 6, 0, 3, 1, 0, 0, 0, 0],
                                [0, 4, 5, 0, 0, 0, 0, 0, 0],
                                [0, 0, 9, 0, 0, 0, 7, 0, 0],
                                [0, 0, 6, 9, 5, 0, 0, 0, 2],
                                [0, 0, 1, 0, 0, 6, 0, 0, 8]];
        for (let row = 0; row < board.length; row++) {
            let currRow = [];
            for (let col = 0; col < board.length; col++) {
                let newCell = new Cell(row, col, board[row][col] == 0 ? undefined : board[row][col]);
                this.cells.push(newCell);
                currRow.push(newCell);
            }
            this.board.push(currRow);
        }
    }
    
    getCells(): Cell[] {
        return this.cells;
    }

    getBoard(): Cell[][] {
        return this.board;
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
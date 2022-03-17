export class Cell {

    row!: number;
    column!: number;
    value?: number;
    pencilMarks!: number[];

    constructor(row: number, column: number, value?: number, pencilMarks?: number[]) {

        this.row = row;
        this.column = column;

        if ( typeof value !== 'undefined' ) {
            this.value = value;
        }

        if ( typeof pencilMarks !== 'undefined') {
            this.pencilMarks = pencilMarks;
        } else {
            this.pencilMarks = [];
        }
    }

    getRowIndex(): number {
        return this.row;
    }

    setRowIndex(row: number): void {
        this.row = row;
    }

    getColumnIndex(): number {
        return this.column;
    }

    setColumnIndex(column: number): void {
        this.column = column;
    }

    getValue(): number | undefined {
        return this.value;
    }

    setValue(value: number | undefined): void {
        this.value = value;
    }
}
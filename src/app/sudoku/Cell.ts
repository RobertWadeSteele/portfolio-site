export class Cell {
    value?: number;
    pencilMarks!: number[];

    constructor(value?: number, pencilMarks?: number[]) {

        if ( typeof value !== 'undefined' ) {
            this.value = value;
        }

        if ( typeof pencilMarks !== 'undefined') {
            this.pencilMarks = pencilMarks;
        } else {
            this.pencilMarks = [];
        }
    }
}
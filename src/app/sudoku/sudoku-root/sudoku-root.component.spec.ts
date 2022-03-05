import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuRootComponent } from './sudoku-root.component';

describe('SudokuRootComponent', () => {
  let component: SudokuRootComponent;
  let fixture: ComponentFixture<SudokuRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

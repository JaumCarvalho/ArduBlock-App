import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammingPage } from './programming.page';

describe('ProgrammingPage', () => {
  let component: ProgrammingPage;
  let fixture: ComponentFixture<ProgrammingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

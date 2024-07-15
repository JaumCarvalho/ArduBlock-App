import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArduinoComponentsPage } from './arduino-components.page';

describe('ArduinoComponentsPage', () => {
  let component: ArduinoComponentsPage;
  let fixture: ComponentFixture<ArduinoComponentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

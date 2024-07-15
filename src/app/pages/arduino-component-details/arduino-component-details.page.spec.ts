import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArduinoComponentDetailsPage } from './arduino-component-details.page';

describe('ArduinoComponentDetailsPage', () => {
  let component: ArduinoComponentDetailsPage;
  let fixture: ComponentFixture<ArduinoComponentDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoComponentDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

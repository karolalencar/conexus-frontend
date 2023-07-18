import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBorderComponent } from './forms-border.component';

describe('FormsBorderComponent', () => {
  let component: FormsBorderComponent;
  let fixture: ComponentFixture<FormsBorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsBorderComponent]
    });
    fixture = TestBed.createComponent(FormsBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeHeaderComponent } from './custome-header.component';

describe('CustomeHeaderComponent', () => {
  let component: CustomeHeaderComponent;
  let fixture: ComponentFixture<CustomeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeHeaderComponent]
    });
    fixture = TestBed.createComponent(CustomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

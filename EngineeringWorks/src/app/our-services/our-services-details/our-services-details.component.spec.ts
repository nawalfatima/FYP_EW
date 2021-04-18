import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesDetailsComponent } from './our-services-details.component';

describe('OurServicesDetailsComponent', () => {
  let component: OurServicesDetailsComponent;
  let fixture: ComponentFixture<OurServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageServicesComponent } from './admin-manage-services.component';

describe('AdminManageServicesComponent', () => {
  let component: AdminManageServicesComponent;
  let fixture: ComponentFixture<AdminManageServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

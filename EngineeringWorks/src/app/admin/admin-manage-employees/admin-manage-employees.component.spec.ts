import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageEmployeesComponent } from './admin-manage-employees.component';

describe('AdminManageEmployeesComponent', () => {
  let component: AdminManageEmployeesComponent;
  let fixture: ComponentFixture<AdminManageEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

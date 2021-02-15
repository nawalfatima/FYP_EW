import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageEquipmentComponent } from './admin-manage-equipment.component';

describe('AdminManageEquipmentComponent', () => {
  let component: AdminManageEquipmentComponent;
  let fixture: ComponentFixture<AdminManageEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

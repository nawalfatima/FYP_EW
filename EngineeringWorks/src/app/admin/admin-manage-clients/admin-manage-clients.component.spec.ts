import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageClientsComponent } from './admin-manage-clients.component';

describe('AdminManageClientsComponent', () => {
  let component: AdminManageClientsComponent;
  let fixture: ComponentFixture<AdminManageClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

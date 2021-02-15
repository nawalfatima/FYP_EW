import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPlaceOrderComponent } from './client-place-order.component';

describe('ClientPlaceOrderComponent', () => {
  let component: ClientPlaceOrderComponent;
  let fixture: ComponentFixture<ClientPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPlaceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

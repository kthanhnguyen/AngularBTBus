import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBusComponent } from './baitap-bus.component';

describe('BaitapBusComponent', () => {
  let component: BaitapBusComponent;
  let fixture: ComponentFixture<BaitapBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

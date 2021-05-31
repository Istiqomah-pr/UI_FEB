import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BataspenyimpananComponent } from './bataspenyimpanan.component';

describe('BataspenyimpananComponent', () => {
  let component: BataspenyimpananComponent;
  let fixture: ComponentFixture<BataspenyimpananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BataspenyimpananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BataspenyimpananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

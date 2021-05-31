import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulogComponent } from './bulog.component';

describe('BulogComponent', () => {
  let component: BulogComponent;
  let fixture: ComponentFixture<BulogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

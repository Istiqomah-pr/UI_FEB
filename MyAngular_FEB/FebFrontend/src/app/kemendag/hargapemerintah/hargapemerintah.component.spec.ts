import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HargapemerintahComponent } from './hargapemerintah.component';

describe('HargapemerintahComponent', () => {
  let component: HargapemerintahComponent;
  let fixture: ComponentFixture<HargapemerintahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HargapemerintahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HargapemerintahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

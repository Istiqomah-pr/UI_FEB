import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KementanComponent } from './kementan.component';

describe('KementanComponent', () => {
  let component: KementanComponent;
  let fixture: ComponentFixture<KementanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KementanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KementanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

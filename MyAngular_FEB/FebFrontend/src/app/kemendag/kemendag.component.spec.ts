import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KemendagComponent } from './kemendag.component';

describe('KemendagComponent', () => {
  let component: KemendagComponent;
  let fixture: ComponentFixture<KemendagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KemendagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KemendagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlinanDerslerComponent } from './alinan-dersler.component';

describe('AlinanDerslerComponent', () => {
  let component: AlinanDerslerComponent;
  let fixture: ComponentFixture<AlinanDerslerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlinanDerslerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlinanDerslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

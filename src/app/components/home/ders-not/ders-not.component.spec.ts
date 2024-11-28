import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersNotComponent } from './ders-not.component';

describe('DersNotComponent', () => {
  let component: DersNotComponent;
  let fixture: ComponentFixture<DersNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DersNotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DersNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

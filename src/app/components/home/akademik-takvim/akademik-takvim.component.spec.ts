import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikTakvimComponent } from './akademik-takvim.component';

describe('AkademikTakvimComponent', () => {
  let component: AkademikTakvimComponent;
  let fixture: ComponentFixture<AkademikTakvimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkademikTakvimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikTakvimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

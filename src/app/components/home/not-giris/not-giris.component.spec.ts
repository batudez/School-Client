import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotGirisComponent } from './not-giris.component';

describe('NotGirisComponent', () => {
  let component: NotGirisComponent;
  let fixture: ComponentFixture<NotGirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotGirisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotGirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

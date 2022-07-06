import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhustMapComponent } from './exhust-map.component';

describe('ExhustMapComponent', () => {
  let component: ExhustMapComponent;
  let fixture: ComponentFixture<ExhustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhustMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta3Component } from './receta3.component';

describe('Receta3Component', () => {
  let component: Receta3Component;
  let fixture: ComponentFixture<Receta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta8Component } from './receta8.component';

describe('Receta8Component', () => {
  let component: Receta8Component;
  let fixture: ComponentFixture<Receta8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

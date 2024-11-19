import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta6Component } from './receta6.component';

describe('Receta6Component', () => {
  let component: Receta6Component;
  let fixture: ComponentFixture<Receta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Receta6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Receta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

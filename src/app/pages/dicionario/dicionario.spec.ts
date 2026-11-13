import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dicionario } from './dicionario';

describe('Dicionario', () => {
  let component: Dicionario;
  let fixture: ComponentFixture<Dicionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dicionario],
    }).compileComponents();

    fixture = TestBed.createComponent(Dicionario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

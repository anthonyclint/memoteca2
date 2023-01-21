import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMostrarMaisComponent } from './botao-mostrar-mais.component';

describe('BotaoMostrarMaisComponent', () => {
  let component: BotaoMostrarMaisComponent;
  let fixture: ComponentFixture<BotaoMostrarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoMostrarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoMostrarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

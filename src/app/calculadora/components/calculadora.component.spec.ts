import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      providers: [CalculadoraService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5', () => {
    const btn3 = fixture.debugElement.query(by.css('#btn3'));
    const btnSoma = fixture.debugElement.query(by.css('#btnSoma'));
    const btn2 = fixture.debugElement.query(By.css('#btn2'));
    const btnCalcular = fixture.debugElement.query(by.css('#btnCalcular'));
    const display = fixture.debugElement.query(by.css('#display'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();
    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();
    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();
    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });
});

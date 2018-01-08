import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve garantir que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('deve garantir que 1 - 4 = -3', inject([CalculadoraService], (service: CalculadoraService) => {
    const subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-3);
  }));

  it('deve garantir que 10 / 2 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    const divisao = service.calcular(10, 2, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(5);
  }));

  it('deve garantir que 2 * 5 = 10', inject([CalculadoraService], (service: CalculadoraService) => {
    const multiplicacao = service.calcular(2, 5, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(10);
  }));
});

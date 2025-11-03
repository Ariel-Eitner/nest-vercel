import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const start = Date.now();

    // Cálculo pesado: sumar los primeros 500 millones
    let sum = 0;
    for (let i = 0; i < 500_000_000; i++) {
      sum += i;
    }

    const end = Date.now();
    const time = (end - start) / 1000; // segundos

    return `Hola mundo! Cálculo terminado en ${time} segundos. Resultado parcial: ${sum}`;
  }
}

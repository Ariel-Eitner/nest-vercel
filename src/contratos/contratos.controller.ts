import { Controller, Get } from '@nestjs/common';

@Controller('contratos')
export class ContratosController {
  @Get()
  getContratos(): string {
    return 'Hola mundo desde Contratos!';
  }
}

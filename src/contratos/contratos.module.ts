import { Module } from '@nestjs/common';
import { ContratosController } from './contratos.controller';

@Module({
  controllers: [ContratosController]
})
export class ContratosModule {}

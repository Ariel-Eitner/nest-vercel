import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ContratosModule } from './contratos/contratos.module';

@Module({
  imports: [UsuariosModule, ContratosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

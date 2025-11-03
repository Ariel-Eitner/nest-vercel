import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  getUsuarios(): string {
    return 'Hola mundo desde Usuarios!';
  }
}

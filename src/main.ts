import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ContratosModule } from './contratos/contratos.module';

const createServer = async (module) => {
  const expressApp = express();
  const app = await NestFactory.create(module, new ExpressAdapter(expressApp));
  await app.init();
  return serverless(expressApp);
};

export const usuariosHandler = createServer(UsuariosModule);
export const contratosHandler = createServer(ContratosModule);

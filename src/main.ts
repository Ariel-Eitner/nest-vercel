import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';

import { UsuariosModule } from './usuarios/usuarios.module';
import { ContratosModule } from './contratos/contratos.module';

const createServer = async (module: any) => {
  const expressApp = express();
  const app = await NestFactory.create(module, new ExpressAdapter(expressApp));
  await app.init();
  return serverless(expressApp);
};

// Cacheamos los handlers (muy importante para Vercel)
let usuariosHandlerCached: any;
let contratosHandlerCached: any;

export const usuariosHandler = async (req: any, res: any) => {
  if (!usuariosHandlerCached) {
    usuariosHandlerCached = await createServer(UsuariosModule);
  }
  return usuariosHandlerCached(req, res);
};

export const contratosHandler = async (req: any, res: any) => {
  if (!contratosHandlerCached) {
    contratosHandlerCached = await createServer(ContratosModule);
  }
  return contratosHandlerCached(req, res);
};

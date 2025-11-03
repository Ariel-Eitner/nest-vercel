import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import serverless from 'serverless-http';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

let cachedHandler: any;

export default async function handler(req: any, res: any) {
  if (!cachedHandler) {
    const expressApp = express();
    const app = await NestFactory.create(
      UsuariosModule,
      new ExpressAdapter(expressApp),
    );
    await app.init();
    cachedHandler = serverless(expressApp);
  }
  return cachedHandler(req, res);
}

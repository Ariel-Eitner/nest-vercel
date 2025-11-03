import { usuariosHandler } from 'src/main';

export const GET = async (req: Request) => {
  // @ts-ignore
  return usuariosHandler(req);
};

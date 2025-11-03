import { contratosHandler } from 'src/main';

export const GET = async (req: Request) => {
  // @ts-ignore
  return contratosHandler(req);
};

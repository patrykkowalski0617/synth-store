import { rest } from 'msw';
import { productsData } from '../data/productsData';

export const handlers = [
  rest.get('/desktop_synths', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ productsData }));
  }),
];

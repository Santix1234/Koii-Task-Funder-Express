import { Request, Response, NextFunction } from 'express';

export function validateCoinPriceParams(req: Request, res: Response, next: NextFunction) {
  const { id, currency } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Coin ID is required' });
  }

  if (!currency) {
    return res.status(400).json({ error: 'Currency is required' });
  }

  next();
}

export function validateCoinListParams(req: Request, res: Response, next: NextFunction) {
  const { limit, page } = req.query;

  if (limit && (isNaN(Number(limit)) || Number(limit) <= 0)) {
    return res.status(400).json({ error: 'Invalid limit parameter' });
  }

  if (page && (isNaN(Number(page)) || Number(page) <= 0)) {
    return res.status(400).json({ error: 'Invalid page parameter' });
  }

  next();
}

export function validateCoin(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid coin ID' });
  }

  next();
}
import { describe, it, expect } from 'vitest';
import cryptoPrices from '../src/data/mock-crypto-prices.json';

describe('Mock Cryptocurrency Prices', () => {
  it('should have mock crypto prices with correct structure', () => {
    expect(cryptoPrices).toBeDefined();
    expect(cryptoPrices.bitcoin).toBeDefined();
    expect(cryptoPrices.ethereum).toBeDefined();
    expect(cryptoPrices.bitcoin.usd).toBeTypeOf('number');
  });
});
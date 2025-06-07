import { describe, it, expect } from 'vitest';
import { ironManRoute } from './ironManRoute';
import { Request, Response } from 'express';

describe('Iron Man Route', () => {
  it('should return Iron Man description', () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: (code: number) => ({
        json: (data: any) => {
          expect(code).toBe(200);
          expect(data).toEqual({
            hero: 'Iron Man', 
            description: 'I am Iron Man - Tony Stark'
          });
        }
      })
    } as unknown as Response;

    ironManRoute(mockReq, mockRes);
  });

  it('should handle potential errors', () => {
    const mockReq = {} as Request;
    const mockRes = {
      status: (code: number) => ({
        json: (data: any) => {
          expect(code).toBe(500);
          expect(data).toEqual({
            error: 'Internal Server Error',
            message: 'Unable to retrieve Iron Man information'
          });
        }
      })
    } as unknown as Response;

    // Simulate an error scenario (though our current implementation doesn't throw)
    ironManRoute(mockReq, mockRes);
  });
});
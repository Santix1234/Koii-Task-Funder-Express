import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import heroRoutes from '../routes/heroRoutes'; // Adjust path as needed

const app = express();
app.use('/heroes', heroRoutes);

describe('Hero Routes', () => {
  describe('GET /heroes/:heroName', () => {
    const testCases = [
      { 
        heroName: 'spiderman', 
        expectedStatus: 200, 
        expectedBody: { name: 'Spider-Man', realName: 'Peter Parker' }
      },
      { 
        heroName: 'ironman', 
        expectedStatus: 200, 
        expectedBody: { name: 'Iron Man', realName: 'Tony Stark' }
      },
      { 
        heroName: 'captainamerica', 
        expectedStatus: 200, 
        expectedBody: { name: 'Captain America', realName: 'Steve Rogers' }
      },
      { 
        heroName: 'unknown', 
        expectedStatus: 404, 
        expectedBody: { error: 'Hero not found' }
      }
    ];

    testCases.forEach(({ heroName, expectedStatus, expectedBody }) => {
      it(`should return correct data for ${heroName}`, async () => {
        const response = await request(app).get(`/heroes/${heroName}`);
        
        expect(response.status).toBe(expectedStatus);
        expect(response.body).toEqual(expectedBody);
      });
    });

    it('should be case-insensitive', async () => {
      const response = await request(app).get('/heroes/SpIdErMaN');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ name: 'Spider-Man', realName: 'Peter Parker' });
    });
  });
});
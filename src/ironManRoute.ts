import { Request, Response } from 'express';

/**
 * Route handler for Iron Man hero
 * Returns a string representation of Iron Man
 * 
 * @param req Express request object
 * @param res Express response object
 */
export const ironManRoute = (req: Request, res: Response) => {
  try {
    const ironManDescription = 'I am Iron Man - Tony Stark';
    res.status(200).json({ hero: 'Iron Man', description: ironManDescription });
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal Server Error', 
      message: 'Unable to retrieve Iron Man information' 
    });
  }
};
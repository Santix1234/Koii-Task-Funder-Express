import express from 'express';

const router = express.Router();

const heroes = {
  spiderman: { name: 'Spider-Man', realName: 'Peter Parker' },
  ironman: { name: 'Iron Man', realName: 'Tony Stark' },
  captainamerica: { name: 'Captain America', realName: 'Steve Rogers' }
};

router.get('/:heroName', (req, res) => {
  const heroName = req.params.heroName.toLowerCase();
  
  const hero = heroes[heroName];
  
  if (!hero) {
    return res.status(404).json({ error: 'Hero not found' });
  }
  
  return res.status(200).json(hero);
});

export default router;
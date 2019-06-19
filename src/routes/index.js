
import express from 'express';
import logger from '../lib/logger';

const router = express.Router();

import topic from '../components/topic';

/* GET home page. */
router.get('/', (req, res, next) => {

  logger.info('Hello info again distributed logs');
  logger.debug('Hello debug again distributed logs');
  logger.error('Hello error again distributed logs');
  
  res.render('index', { title: 'Express' });
});

console.log("routes==>index.js");

router.use('/topic', topic);


module.exports = router;

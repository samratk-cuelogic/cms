
import express from 'express';
import logger from '../lib/logger';
import authentication from '../middleware/Authentication';
 
// app.use(middleware);
// app.use('/', indexRouter);

const router = express.Router();

import topic from '../components/topic';
 
// authentication.authenticate, 
router.get('/',  async (req, res, next) => {

  logger.info('auth');
  
  res.render('index', { title: 'Express  token'  });

});


console.log("routes==>index.js");

router.use('/topic', topic);


module.exports = router;

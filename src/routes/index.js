
import express from 'express';

const router = express.Router();

import topic from '../components/topic';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

console.log("routes==>index.js");

router.use('/topic', topic);


module.exports = router;

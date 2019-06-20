
import express from 'express';
import logger from '../lib/logger';
import authentication from '../middleware/Authentication';
 
const router = express.Router();
 
/* GET home page. */
router.get('/', (req, res, next) => {

  logger.info('Hello info again distributed logs');
  logger.debug('Hello debug again distributed logs');
  logger.error('Hello error again distributed logs');

  res.render('index', { title: 'Express' });
});

router.get('/login', async (req, res) => {

  logger.info(` routes => login `);

  // User.findOne({ email: req.body.email }, function (err, user) {
  //   if (err) return res.status(500).send('Error on the server.');
  //   if (!user) return res.status(404).send('No user found.');

  //   var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  //   if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
  let user = {
    _id: 1
  }
  const token = await authentication.getToken({ id: user._id });
  res.status(200).send({ auth: true, token: token });
  // });

});



console.log("routes==>public.js");
 


module.exports = router;

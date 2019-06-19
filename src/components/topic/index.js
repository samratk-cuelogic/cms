
import express from 'express';

const router = express.Router();
import logger from '../../lib/logger';


import topicValidation from './topic-validation';
import topicController from './topic-controller';



console.log("__dirname" + __dirname);

console.log("components==>topic==>index.js");
/* GET home page. */

router.get('/', topicValidation.getTopic, topicController.getTopic);





export default router;
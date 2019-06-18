
import express from 'express';

const router = express.Router();
// import topicController from 'topic-controller';


import topicController from './topic-controller';



console.log("components==>topic==>index.js");
/* GET home page. */

router.get('/', (req, res, next) => {
  console.log("INDEX FILE  TopicController :: getTopic");
  next();
}, topicController.getTopic);





export default router;
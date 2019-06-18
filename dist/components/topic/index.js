"use strict";

var _express = _interopRequireDefault(require("express"));

var _topicController = _interopRequireDefault(require("topic-controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  console.log("INDEX FILE  TopicController :: getTopic");
  next();
}, _topicController["default"].getTopic);
module.exports = router;
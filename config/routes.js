var express = require('express');
var router = express.Router();
var funeralHomesCtrl = require('../controllers/prayerRequests')



router.route('/api/prayerRequest')
  .post(prayerRequests.sendEmail);

module.exports = router;

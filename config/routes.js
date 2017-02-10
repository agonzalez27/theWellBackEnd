var express = require('express');
var router = express.Router();
var prayerRequestCtrl = require('../controllers/prayerRequest');
var mediaRequestCtrl = require('../controllers/mediaRequest');



router.route('/api/prayerRequest')
  .post(prayerRequestCtrl.sendEmail)

router.route('/api/mediaRequest')
  .get(mediaRequestCtrl.mediaRequest)

module.exports = router;

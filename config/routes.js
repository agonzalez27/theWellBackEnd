var express = require('express');
var router = express.Router();
var prayerRequestCtrl = require('../controllers/prayerRequest')



router.route('/api/prayerRequest')
  .post(prayerRequestCtrl.sendEmail);

module.exports = router;

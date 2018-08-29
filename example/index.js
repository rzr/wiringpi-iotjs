// -*- mode: js; js-indent-level:2;  -*-
// SPDX-License-Identifier: BSD
// Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors

var console = require('console');

// To suppress logs: Add ! just after = :
var log = console.log || function() {}

var wpi = null;
try {
  wpi = require('../wiringpi-iotjs');
} catch (err) {
  wpi = require('wiringpi-iotjs');
}
if (!wpi) {
  throw 'Error: Null require';
}

var pin = 5;
if (process.argv.length > 2) {
  pin = Number(process.argv[2]);
}

var direction = wpi.OUTPUT;
log('GPIO: setup: pin=' + pin + ': direction=' + direction);
wpi.setup('gpio');
wpi.pinMode(pin, direction);

log('GPIO: write: high: pin=' + pin);
wpi.digitalWrite(pin, wpi.HIGH);
setTimeout(function() {
  log('GPIO: write: low: pin=' + pin);
  wpi.digitalWrite(pin, wpi.LOW);
}, 1000);

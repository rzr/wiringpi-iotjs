// -*- mode: js; js-indent-level:2;  -*-
// SPDX-License-Identifier: Apache-2.0

/* Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var console = require('console');

// To suppress logs: Add ! just after = :
var log = console.log || function() {}

var wpi;
try {
  wpi = require('./lib/iotjs/wiringpi-node');
} catch (err) {
  wpi = require('wiringpi-node');
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
setTimeout(funciton() {
  log('GPIO: write: low: pin=' + pin);
  wpi.digitalWrite(pin, wpi.LOW);
}, 1000);

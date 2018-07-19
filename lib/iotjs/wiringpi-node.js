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

var gpio = require('gpio');

function wpi() {
  if (!(this instanceof wpi)) {
    return new wpi();
  }
  this.gpios = [];
}

wpi.prototype.HIGH = 1;
wpi.prototype.LOW = 0;
wpi.prototype.OUTPUT = gpio.DIRECTION.OUT;

wpi.prototype.pinMode = function(pin, mode) {
  this.gpios[pin] = gpio.openSync({
    pin: pin,
    direction: mode
  });
};

wpi.prototype.digitalWrite = function(pin, bit) {
  this.gpios[pin].writeSync(bit);
};

wpi.prototype.setup = function(feature) {
  if (feature !== 'gpio') {
    throw ('error: Unimplemented yet: ' + feature)
  }
};

module.exports = wpi();

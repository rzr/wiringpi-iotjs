// -*- mode: js; js-indent-level:2;  -*-
// SPDX-License-Identifier: BSD
// Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors

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

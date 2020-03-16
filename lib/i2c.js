// -*- mode: js; js-indent-level:2;  -*-
// SPDX-License-Identifier: BSD
// Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors

var I2c = null
try {
  I2c = require('@abandonware/i2c')
} catch (err) {
  I2c = require('i2c')
}
var Port = function (options) {
  this.config = options || {}
  if (this.config.device === undefined) {
    this.config.device = '/dev/i2c-1'
  }
  if (this.config.bus === undefined) {
    this.config.bus = 1
  }
  if (this.config.address === undefined) {
    this.config.address = 0x29
  }
  if (I2c.openSync) {
    this.i2c = I2c.openSync(this.config)
  } else {
    this.i2c = new I2c(this.config.address, { device: this.config.device })
  }
  /* Not ideal but works, maybe iotjs-async could be better to use */
  if (!this.i2c.writeSync) {
    this.i2c.writeSync = function (bytes) {
      this.write(bytes, function (err, res) {
        if (err) { throw (err) }
      })
    }
  }
  if (!this.i2c.readBytes) {
    this.i2c.readBytes = function (offset, len, callback) {
      this.writeSync([offset])
      this.read(len, function (err, res) {
        if (callback) { callback(err, res) }
      })
    }
  }

  return this.i2c
}

module.exports = Port

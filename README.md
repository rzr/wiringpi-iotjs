# IOTJS-WIRING #

Lightweight reimplentation of wiring-node for IoT.js,

WARNING: it's not isofunctionnal, many features are dropped, but API should align
to help porting Node.js modules to IoT.js

* URL: https://github.com/rzr/iotjs-wiringpi

[![GitHub forks](https://img.shields.io/github/forks/rzr/iotjs-wiringpi.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/rzr/iotjs-wiringpi/network/)

[![License](https://img.shields.io/badge/licence-Apache%202.0-brightgreen.svg?style=flat)](LICENSE)

[![NPM](https://nodei.co/npm/iotjs-wiringpi.png)](https://npmjs.org/package/iotjs-wiringpi)


## USAGE: ##


### USING IOTJS: ###

Running from sources tree is straightforward, but each step will be detailed.

```sh
iotjs example

GPIO: Setup: pin=5: direction=1
GPIO: write: high: pin=5
GPIO: write: low: pin=5
```

### DEMO: ###

```sh
iotjs example

```

Or using more advanced device:

[![iotjs-wiringpi](https://pbs.twimg.com/ext_tw_video_thumb/1019945702791766017/pu/img/bbbNf-HJR2FkUb5l.jpg)](https://twitter.com/TizenHelper/status/1019945989388546048# "blinkt-node")


### USING NODEJS: ###

Node is not yet supported but for debugging purpose, gpio calls can be stubbed


## RESOURCES: ##

* https://github.com/rzr/iotjs-wiringpi
* https://www.npmjs.com/package/wiringpi
* https://github.com/Soarez/node-wiring-pi
* http://iotjs.net
* https://github.com/~rzr
* https://github.com/Irrelon/node-blinkt

#!/bin/make -f
# -*- makefile -*-
# SPDX-License-Identifier: BSD
# Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors

default: help all

project ?= wiringpi-iotjs
tmp_dir ?= tmp
runtime ?= iotjs
example_src ?= example/index.js

iotjs_modules_dir?=${CURDIR}/iotjs_modules

help:
	@echo "## Usage: "
	@echo "# make start"

all: build

node_modules: package.json
	npm install --only=dev

node/modules: node_modules
	ls $<

modules: ${runtime}/modules
	@echo "log: $@: $^"

package-lock.json: package.json
	rm -fv "$@"
	npm install
	ls "$@"

setup/node: node_modules
	@echo "NODE_PATH=$${NODE_PATH}"
	node --version
	npm --version

clean:
	rm -rf ${tmp_dir}

cleanall: clean
	rm -f *~

distclean: cleanall
	rm -rf node_modules iotjs_modules

start: ${example_src}
	iotjs $<

check: lint

lint: node_modules
	npm run lint

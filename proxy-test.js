#!/usr/bin/env node
const rp = require('request-promise')
const n = require('needle')

const url = process.argv[2] || 'http://ifconfig.co/ip'
const proxy = process.argv[3] || 'http://localhost:3128'

rp({ method: 'GET', url, proxy })
.then(x => console.log('rp:', x))
.then(() => n('get', url, null, { proxy }))
.then(x => console.log('needle:', x.body))

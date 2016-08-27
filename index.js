'use strict'

const co = require('co')
const execSync = require('child_process').execSync
const fs = require('fs')
const merge = require('lodash/merge')
const npm = require('repotool-utils/npm')
const combine = require('repotool-utils/combine')

const dependencies = npm.dependencies([
  'eslint',
  'eslint-config-standard',
  'eslint-plugin-standard',
  'eslint-plugin-promise'
])

const packageJson = npm.packageJson({
  scripts: {
    lint: 'eslint .'
  }
})

module.exports = (opts, state) => combine(dependencies, packageJson, {
  hooks: {
    lint: () => 'npm run lint'
  }
})

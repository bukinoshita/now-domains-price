'use strict'

const { join } = require('path')
const { homedir } = require('os')

const { readJSON } = require('fs-extra')

module.exports = async () => {
  let token

  try {
    const sh = await readJSON(join(homedir(), '.now/auth.json'))
    token = sh.credentials[0].token
  } catch (err) {}

  return token
}

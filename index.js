'use strict'

const { encode: encodeQuery } = require('querystring')
const fetch = require('node-fetch')
const nowDomainsStatus = require('now-domains-status')

const getToken = require('./lib/get-token')

module.exports = async (name, { secret } = {}) => {
  if (!name) {
    throw new Error('`domain` is not defined')
  }

  const token = secret ? secret : await getToken()
  const { available } = await nowDomainsStatus(name, { token: secret })

  if (available) {
    const query = encodeQuery({ name })
    const res = await fetch(`https://api.zeit.co/domains/price?${query}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const json = await res.json()

    return json
  }

  return `${name} is not available.`
}

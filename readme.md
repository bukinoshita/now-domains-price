# now-domains-price [![Build Price](https://travis-ci.org/bukinoshita/now-domains-price.svg?branch=master)](https://travis-ci.org/bukinoshita/now-domains-price)

> Check now domains price


## Install

```bash
$ yarn add now-domains-price
```


## Usage

```js
const nowDomainsPrice = require('now-domains-price')

nowDomainsPrice('domain.com').then(res => res)
// => { price: 15, period: 1 }
```


## API

### nowDomainsPrice(domain, [options])

Returns a `promise`

#### domain

Type: `string`<br/>
Required

domain name to be checked

#### options

Type: `object`

##### secret

Type: `string`

If `secret` is not passed, it will try to get your local `secret` stored on `.now/auth.json`. If you don't use [now](https://zeit.co/now), you must pass a `secret`. Get one [here](https://zeit.co/account/tokens).


## Related

- [now-domains](https://github.com/bukinoshita/now-domains) — CLI for this module
- [now-domains-status](https://github.com/bukinoshita/now-domains-status) — Check now domains availability


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)

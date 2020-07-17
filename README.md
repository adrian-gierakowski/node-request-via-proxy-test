# install deps

```sh
yarn
```

# run squid proxy in docker:

```sh
docker run -it --rm --name squid \
  --publish 3128:3128 \
  --volume $(pwd)/squid.conf:/etc/squid/squid.conf \
  sameersbn/squid:3.5.27-2
```

# run the tests:

## http request (default)

This should work for both `request-promise` and `needle`

```sh
./proxy-test.js
```

## https

This works with `request-promise` but not with `needle`

```sh
./proxy-test.js https://ifconfig.co/ip
```

Looks like `needle` does not support https request via a http proxy with
CONNECT method. But [request does](https://www.npmjs.com/package/request#proxies).

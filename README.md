# check-snapshot [![Build Status](https://travis-ci.org/pablopalacios/check-snapshot.svg?branch=master)](https://travis-ci.org/pablopalacios/check-snapshot) [![Coverage Status](https://coveralls.io/repos/github/pablopalacios/check-snapshot/badge.svg?branch=coveralls)](https://coveralls.io/github/pablopalacios/check-snapshot?branch=coveralls)

Simple wrapper around jest expect and react-test-renderer to eliminate
snapshot testing boilerplate.

## Install

```
yarn add -D check-snapshot
```

## Usage

```javascript
import checkSnapshot from 'check-snapshot';
import MyComponent from '../MyComponent';

test('MyComponent', () => {
    checkSnapshot(<MyComponent />);
});
```

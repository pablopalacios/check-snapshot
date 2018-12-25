# check-snapshot [![Build Status](https://travis-ci.org/pablopalacios/check-snapshot.svg?branch=master)](https://travis-ci.org/pablopalacios/check-snapshot) [![Coverage Status](https://coveralls.io/repos/github/pablopalacios/check-snapshot/badge.svg?branch=coveralls)](https://coveralls.io/github/pablopalacios/check-snapshot?branch=coveralls)

Simple wrapper around jest expect and react-test-renderer to eliminate
snapshot testing boilerplate.

## Install

```
yarn add -D check-snapshot
```

## Usage

```javascript
import snapshot from 'check-snapshot';
import MyComponent from '../MyComponent';

test('MyComponent', () => snapshot(<MyComponent />));
```

### Passing options to renderer.create

If you need to mock a ref you can pass an object as second argument to
snapshot function. This object will be passed to renderer.create when
serializing your component.

```javascript
const createNodeMock = () => ({ focus: () => null });
const options = { createNodeMock }

test('MyComponent', () => snapshot(<MyComponent />, options))

// The same as:
test('MyComponent', () => {
    const tree = renderer.create(<MyComponent />, options).toJSON();
    expect(tree).toMatchSnapshot();
});
```

# array-intersection [![NPM version](https://badge.fury.io/js/array-intersection.svg)](http://badge.fury.io/js/array-intersection)

> Return an array with the unique values present in _all_ given arrays using strict equality for comparisons.

Based on [mout's](http://moutjs.com/) implementation of `intersection`.

## Install

**Install with NPM**

Install with [npm](https://www.npmjs.com/)

```bash
npm i array-intersection --save
```

**Install with Bower**

Install with [bower](http://bower.io/)

```bash
bower install array-intersection --save
```

## Usage

```js
var intersection = require('array-intersection');

intersection(['a', 'a', 'c'])
//=> ['a', 'c']

intersection(['a', 'b', 'c'], ['b', 'c', 'e'])
//=> ['b', 'c']

intersection(['a', 'b', 'c'], ['b', 'c', 'e'], ['b', 'c', 'e'])
//=> ['b', 'c']
```

## Related projects

* [array-every](https://github.com/jonschlinkert/array-every): Returns true if the callback returns truthy for all elements in the given array.
* [array-slice](https://github.com/jonschlinkert/array-slice): Array-slice method. Slices `array` from the `start` index up to, but not including, the `end`… [more](https://github.com/jonschlinkert/array-slice)
* [array-unique](https://github.com/jonschlinkert/array-unique): Return an array free of duplicate values. Fastest ES5 implementation.
* [arr-union](https://github.com/jonschlinkert/arr-union): Combines a list of arrays, returning a single array with unique values, using strict equality… [more](https://github.com/jonschlinkert/arr-union)
* [filter-array](https://github.com/jonschlinkert/filter-array): Iterates over the elements in an array, returning an array with only the elements for… [more](https://github.com/jonschlinkert/filter-array)
* [index-of](https://github.com/jonschlinkert/index-of): Get the index of the first element in an array that returns truthy for the… [more](https://github.com/jonschlinkert/index-of)

## Running tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/array-intersection/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright (c) 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 07, 2015._
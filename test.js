/*!
 * array-intersection <https://github.com/jonschlinkert/array-intersection>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var intersection = require('./');

describe('intersection', function () {
  it('should return unique elements in the given array:', function () {
    intersection(['a', 'a', 'c']).should.eql(['a', 'c']);
  });

  it('should return only the unique elements from all provided arrays:', function () {
    intersection(['a', 'b', 'c'], ['b', 'c', 'e']).should.eql(['b', 'c']);
    intersection(['a', 'b', 'c'], ['b', 'c', 'e'], ['b', 'c', 'e']).should.eql(['b', 'c']);
  });
});

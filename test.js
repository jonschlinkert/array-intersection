/*!
 * array-intersection <https://github.com/jonschlinkert/array-intersection>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var intersection = require('./');
var _ = require('lodash');

describe('intersection', function () {
  it('should return unique elements in the given array:', function () {
    _.intersection(['a', 'a', 'c']).should.eql(['a', 'c']);
  });

  it('should return only the unique elements from all provided arrays:', function () {
    _.intersection(['a', 'b', 'c'], ['b', 'c', 'e']).should.eql(['b', 'c']);
    _.intersection(['a', 'b', 'c'], ['b', 'c', 'e'], ['b', 'c', 'e']).should.eql(['b', 'c']);
  });
});

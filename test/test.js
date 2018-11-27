var assert = require('assert');
var even = require('../js/even.js')
var cat = require('../js/cat.js')
describe('Array', function() 
{
  describe('#indexOf()', function() 
  {
      it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
                });
  });
});


describe('isEven', function() 
{
  describe('validation', function() 
  {
      it('should return true', function() {
            assert.equal(even(0), true);
                });
      it('should return false', function() {
            assert.equal(even(1), false);
                });
      it('should return true', function() {
            assert.equal(even(2), true);
                });
      it('should throw "not an int" error', function() {
            assert.throws(function(){even(false)}, Error, 'not an int');
                });
      it('should throw "not an int" error', function() {
            assert.throws(function(){even("toto")}, Error, 'not an int');
                });
      it('should throw "not an int" error', function() {
            assert.throws(function(){even(-1)}, Error, 'not an int');
                });
  });
});

describe('cat', function() 
{
  describe('validation', function() 
  {
      it('should return "Bonjour Yann" when the value is "Yann"', function() {
            assert.equal(cat("Yann"), "Bonjour Yann");
                });
      it('should return "not a string" error', function() {
            assert.throws(function(){cat(1)}, Error, 'not a string');
                });
  });
});


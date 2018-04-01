const assert = require('assert');
const expect = require('chai').expect;


describe('bubbleSort', function () {  
    it('should have a function `bubbleSort`', function () {
      expect(bubbleSort).to.be.a('function');
    });
    it('should return arrays of length < 2', function () {
      expect(bubbleSort([1])).to.eql([1]);
    });
  
    it('should sort an array of length > 2', function () {
      expect(bubbleSort([4,5,1,2,3])).to.eql([1,2,3,4,5]);
    });
  
    it('should handle an array in reverse order', function() {
      expect(bubbleSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    });
  });
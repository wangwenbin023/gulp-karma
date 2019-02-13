var assert = chai.assert;
var should = chai.should();

describe('greeter', function () {

  it('should say Hello to the World', function () {
    greet('World').should.equal('Hello, World!');
  });
});

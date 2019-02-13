var expect = chai.expect;

describe('greeter', function () {

  it('should say Hello to the World', function () {
    expect(greet('World')).to.be.equal('Hello, World!');
  });
});

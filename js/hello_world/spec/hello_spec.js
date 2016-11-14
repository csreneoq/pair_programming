describe('Hello', function() {
  // Require class that object I want to test.
  var Hello = require('../lib/Hello');
  
  describe('.helloWorld', function() {
    it('print "hello world" if no parameter is given', function() {
      expect(Hello.helloWorld()).toEqual('hello world');
    });
    
    it('print "hello René" if "René" is pass as parameter', function() {
      expect(Hello.helloWorld('René')).toEqual('hello René');
    });
  });

});

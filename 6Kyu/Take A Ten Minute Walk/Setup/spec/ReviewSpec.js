describe("TenMinuteWalk", function() {

  var walk

  beforeEach (function () {
    walk = new TenMinuteWalk();
  });

  describe('routePlanner', function() {

    it ("Returns harded answer checking setup is working",function() {
      expect(walk.routePlanner(['w'])).toEqual(false);
    })
    
  })

 


});

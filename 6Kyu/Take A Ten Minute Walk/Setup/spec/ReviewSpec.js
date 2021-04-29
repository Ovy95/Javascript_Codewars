describe("TenMinuteWalk", function() {

  var walk

  beforeEach (function () {
    walk = new TenMinuteWalk();
  });

  describe('routePlanner Length of route', function() {

    it ("returns false if length is less then 10",function() {
      expect(walk.routePlanner(['w'])).toEqual(false);
    })
    it ("returns false if length is more then 10",function() {
      expect(walk.routePlanner(['w','w','w','w','w','w','w','w','w','w',,'w','w','w','w','w',])).toEqual(false);
    })
    
  })
  describe('routePlanner checking route can be completed in 10', function() {

    it ("returns false if length is less then 10",function() {
      expect(walk.routePlanner(['w','w','w','w','w','e','e','e','e','e'])).toEqual(true);
    })
  
  })

});

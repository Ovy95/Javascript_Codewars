describe("TenMinuteWalk", function() {

  var walk

  beforeEach (function () {
    walk = new TenMinuteWalk();
  });

  describe('routePlanner', function() {

    it ("returns false if length is less then 10",function() {
      expect(walk.routePlanner(['w'])).toEqual(false);
    })
    it ("returns false if length is more then 10",function() {
      expect(walk.routePlanner(['w','w','w','w','w','w','w','w','w','w',,'w','w','w','w','w',])).toEqual(false);
    })
    
  })

 


});

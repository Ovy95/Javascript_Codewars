describe("Meeting", function() {

  var meeting

  beforeEach (function () {
    meeting = new Meeting();
  });

  describe('sortNames', function() {

    it ("Basic Hardcoded test returns single name in upperCase with Surname first",function() {
      expect(meeting.sortName("Jack:Overton;")).toEqual("(OVERTON, JACK)");
    })
    
    


  })

 


});

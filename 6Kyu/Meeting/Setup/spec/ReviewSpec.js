describe("Meeting", function() {

  var meeting

  beforeEach (function () {
    meeting = new Meeting();
  });

  describe('sortNames', function() {

    it ("Basic Hardcoded test returns single name in upperCase",function() {
      expect(meeting.sortName("Jack Overton")).toEqual("JACK OVERTON");
    })



  })

 


});

describe("Meeting", function() {

  var meeting

  beforeEach (function () {
    meeting = new Meeting();
  });

  describe('sortNames', function() {

    it ("Basic Hardcoded test returns single name in upperCase with Surname first",function() {
      expect(meeting.sortName("Jack:Overton")).toEqual("(OVERTON, JACK)");
    })
    // (CORWILL, WILFRED)(TORNBULL, BARNEY)
    it ("Using two names checking added Sort method to get it in correct order",function() {
      expect(meeting.sortName("Alexis:Wahl;John:Bell")).toEqual('(BELL, JOHN)(WAHL, ALEXIS)');
    })

    it ("Using two names checking added Sort method to get it in correct order",function() {
      expect(meeting.sortName("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")).toEqual('(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)');
    })
    


  })

 


});

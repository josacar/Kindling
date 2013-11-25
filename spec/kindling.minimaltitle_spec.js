describe("kindling.minimaltitle", function() {
  "use strict";

  var old,
    enableMinimalTitle = {minimalTitle: "true"},
    disableMinimalTitle = {minimalTitle: "false"};

  describe("With a full title", function(){
    beforeEach(function() {
      old = document.title;
      document.title = "Campfire: wadus";
    });

    it("should remove campfire: from the title", function() {
      changeOptions(enableMinimalTitle);
      expect(document.title).toEqual('wadus');
    });

    afterEach(function() {
      document.title = old;
    });
  });

  describe("With a minimal title", function(){
    beforeEach(function() {
      old = document.title;
      document.title = "wadus";
    });

    it("should add Campfire: to the title", function() {
      changeOptions(disableMinimalTitle);
      expect(document.title).toEqual('Campfire: wadus');
    });

    afterEach(function() {
      document.title = old;
    });
  });

  var changeOptions = function(options) {
    $.publish("optionsChanged", [options]);
  }
});
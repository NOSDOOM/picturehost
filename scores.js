$.ajax({
  dataType: "json",
  url: "http://www.nfl.com/liveupdate/scorestrip/ss.json",
  jsonpCallback: "loadScoreboard",
  success: function(data) {
    var text = data["gms"];
    var str = "";
    var textsearch = "Packers";
    String.prototype.capitalize = function() {
      return this.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
      });
    };
    if (textsearch != null) {
      str = "";
      for (var key in text) {
        if (text[key].hasOwnProperty("hnn") && text[key].hasOwnProperty("hs")) {
          if (
            text[key]["hnn"].toLowerCase().indexOf(textsearch.toLowerCase()) !=
            -1
          ) {
            var homet = text[key]["h"].capitalize();
            var hometsc = text[key]["hs"];
            var awayt = text[key]["v"].capitalize();
            var awayts = text[key]["vs"];
          }
          if (
            text[key]["vnn"].toLowerCase().indexOf(textsearch.toLowerCase()) !=
            -1
          ) {
            var awayt = text[key]["v"].capitalize();
            var awayts = text[key]["vs"];
            var homet = text[key]["h"].capitalize();
            var hometsc = text[key]["hs"];
          }
        }
      }
    }
  }
});

var stage;
var preload;

function drow() {
  //canvasをstageに
  var tehai = ["ji1", "ji2", "ji3", "ji4", "ji5", "ji6", "ji7", "man1", "man2", "man3", "man4", "man5", "man6"];

  var image, pai;
  for (var i = 0; i < tehai.length; i++) {
    image = preload.getResult(tehai[i]);
    pai = new createjs.Bitmap(image);
    stage.addChild(pai);
    pai.x = $("#canvas").width() / 4 + (i * 33);
    pai.y = $("#canvas").height() / 5 * 4;
    stage.update();
  }
  stage.scale /= 2;

  console.log(stage.scale);
  stage.update;
}


//canvas拡張
function init() {
  $("#wrapper").css("width", "500");
  $("#wrapper").css("height", "500");
  $("#canvas").css("width",$('wrapper').css('width'));
  $("#canvas").css("height",$("wrapper").css('height'));
  console.log($('wrapper').css('width'));
  // $("#canvas").attr({
  //   height: $("#wrapper").height()
  // });
  // $("#canvas").attr({
  //   width: $("#wrapper").width()
  // });
  stage = new createjs.Stage($("canvas")[0]);
  var dir = "mj_img/",
    size = "-66-90-s-emb.png";
  var pai_data, num;
  pai_data = [{
    name: "ji",
    kinds: 7
  }, {
    name: "man",
    kinds: 9
  }, {
    name: "pin",
    kinds: 9
  }, {
    name: "sou",
    kinds: 9
  }, {
    name: "ura",
    kinds: 1
  }];
  num = 1;

  var manifest = [];
  for (var i = 0; i < 5; i++) {
    for (num = 1; num <= pai_data[i].kinds; num++) {
      manifest.push({
        id: pai_data[i].name + num.toString(),
        src: dir + pai_data[i].name + num.toString() + size
      });
    }
  }
  preload = new createjs.LoadQueue(false);

  preload.loadManifest(manifest);
  preload.addEventListener("complete", drow, false);

}

document.addEventListener("DOMContentLoaded", init, false);

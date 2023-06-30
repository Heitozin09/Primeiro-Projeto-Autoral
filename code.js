var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


  var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,55,3);
  var wall11 = createSprite(18,190,3,40);
 var wall12 = createSprite(361,190,3,40);
 var wall13 = createSprite(150,168,3,100);
 var wall14 = createSprite(244,210,3,100);
 var wall15 = createSprite(182,180,63,3);
 var mortes = 0;

  var ding = createSprite(40,190,15,15);
  ding.shapeColor = "green";
  
  var dong1 = createSprite(100,130,15,14);
  dong1.shapeColor = "red";
  var dong2 = createSprite(225,130,15,10);
  dong2.shapeColor = "red";
  var dong3 = createSprite(165,250,15,13);
  dong3.shapeColor = "red";
  var dong4 = createSprite(270,250,15,12);
  dong4.shapeColor = "red";

dong1.velocityY = -8;
dong2.velocityY = 8;
dong3.velocityY = -5;
dong4.velocityY = 8;




function draw() {
background("wither");
 drawSprites();
 ding.bounce(wall1);
dong1.bounceOff(wall1);
dong1.bounceOff(wall2);
dong2.bounceOff(wall2);
dong2.bounceOff(wall1);
dong3.bounceOff(wall15);
dong3.bounceOff(wall2);
dong4.bounceOff(wall1);
dong4.bounceOff(wall2);
ding.collide(wall1);
ding.collide(wall2);
ding.collide(wall3);
ding.collide(wall4);
ding.collide(wall5);
ding.collide(wall6);
ding.collide(wall7);
ding.collide(wall8);
ding.collide(wall9);
ding.collide(wall10);
ding.collide(wall11);
ding.collide(wall12);
ding.collide(wall13);
ding.collide(wall14);
ding.collide(wall15);
text("mortes " +mortes,96,78); 
if(keyDown("right")){
  ding.x = ding.x +3;
}
if(keyDown("down")){
  ding.y = ding.y +3;
}
if(keyDown("up")){
  ding.y = ding.y -3;
}

if(ding.isTouching(dong1)|| ding.isTouching(dong2)||ding.isTouching(dong3)|| ding.isTouching(dong4)){
  ding.x = 40 ;
  ding.y = 190;
  mortes = mortes +1;
}
}
ding.isTouching(wall1);
ding.isTouching(wall2);
ding.isTouching(wall3);
ding.isTouching(wall4);
ding.isTouching(wall5);
ding.isTouching(wall6);
ding.isTouching(wall7);
ding.isTouching(wall8);
ding.isTouching(wall9);
ding.isTouching(wall10);
ding.isTouching(wall11);
ding.isTouching(wall12);
ding.isTouching(wall13);
ding.isTouching(wall14);
ding.isTouching(wall15);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

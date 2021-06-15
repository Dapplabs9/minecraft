var canvas = new fabric.Canvas("myCanvas");

var blockWidth = 30;
var blockHeight = 30;
var playerX = 10;
var playerY = 10;
var player_Object = "";
var block_Object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
      player_Object = Img;
      player_Object.scaleToWidth(150);
      player_Object.scaleToHeight(150);
      player_Object.set({
          top: playerY,
          left: playerX
      })
    })
    canvas.add(player_Object);
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
      block_Object = Img;
      block_Object.scaleToWidth(blockWidth);
      block_Object.scaleToHeight(blockHeight);
      block_Object.set({
          top: playerY,
          left: playerX
      })
    })
    canvas.add(block_Object);
}

window.addEventListener("keydown",key_down);
function key_down(e){
    var keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == 80) {
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if (e.shiftKey == true && keyPressed == 77) {
        blockHeight = blockHeight - 10;
        blockWidth = blockWidth - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if (keyPressed == 37) {
        left();
        console.log("left");
    }
    if (keyPressed == 38) {
        up();
        console.log("up");
    }
    if (keyPressed == 39) {
        right();
        console.log("right");
    }
    if (keyPressed == 40) {
        down();
        console.log("down");
    }
    if (keyPressed == 66) {
        block_update("wall.jpg");
        console.log("wall");
    }
    if (keyPressed == 87) {
        block_update("wood.jpg");
        console.log("wood");
    }
    if (keyPressed == 71) {
        block_update("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPS3g8SG_VhwGxV49n_qONfA4QWah_KG7fpkdxC0Yg5DO95sJzRdrsZ_4aUL5OImzWzMo&usqp=CAU");
        console.log("glass");
    }
    if (keyPressed == 82) {
        block_update("roof.jpg");
        console.log("roof");
    }
    if (keyPressed == 89) {
        block_update("yellow_wall.png");
        console.log("wall2");
    }
    if (keyPressed == 83) {
        block_update("Stick.png");
        console.log("stick");
    }
    if (keyPressed == 76) {
        block_update("unique.png")
    }
    if (keyPressed == 68) {
        block_update("ground.png")
    }
    if (keyPressed == 65) {
        block_update("light_green.png");
    }
}
function up(){
    if (playerY >=0) {
        playerY = playerY - 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function down(){
    if (playerY <=600) {
        playerY = playerY + 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function right(){
    if (playerX <=1000) {
        playerX = playerX + 10;
        canvas.remove(player_Object);
        player_update();
    }
}
function left(){
    if (playerX >=0) {
        playerX = playerX - 10;
        canvas.remove(player_Object);
        player_update();
    }
}

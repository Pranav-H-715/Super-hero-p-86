var canvas=new fabric.canvas("canvas")
var playerX=10
var playerY=10
var blockwidth=30
var blockheight=30
var playerobject
var blockobject

function player() {
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img) {
        playerobject=Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeigth(150)

        playerobject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerobject)
    })
}

function block(blockname) {
    fabric.Image.fromURL(blockname,function(Img) {
        blockobject=Img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeigth(blockheight)

        blockobject.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blockobject)
    })
}

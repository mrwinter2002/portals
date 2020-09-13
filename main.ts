scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    // goes back and forth and never stops if you put your sprite on the EXACT spot for button/portal. 
    // FIX PROBLEM:
    // Place player 1 col and 1 row over in a certain direction to avoid this
    tiles.placeOnTile(ducky, tiles.getTileLocation(12, 13))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.placeOnTile(ducky, tiles.getTileLocation(5, 3))
})
let ducky: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100002020202020202020102020202020202020202020202020201020202020202020202020203020202010202020202020202020202020202020102020202020202020202020202020201020202020202020202020202020202010202020202020202020202020202020102020202020202020202020202020201020202020202020202020202020202010202020202020201010101010101010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020204020202020202020202020202020202020202`, img`
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    2 2 2 2 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.buttonPink,sprites.dungeon.buttonTeal], TileScale.Sixteen))
ducky = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(ducky)
scene.cameraFollowSprite(ducky)

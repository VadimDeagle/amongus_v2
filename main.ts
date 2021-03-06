namespace SpriteKind {
    export const Im = SpriteKind.create()
    export const Meteor = SpriteKind.create()
    export const Trup = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Im, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    music.thump.play()
    sprite.startEffect(effects.rings, 500)
})
function levelStart () {
    Commanda = [
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f c a a a a a a a a a f . . 
        . f c c a a 6 9 9 9 9 9 1 1 f . 
        . f c c a a 6 9 9 9 9 9 9 1 f . 
        . f c c a a 6 9 9 9 9 9 9 9 f . 
        . f c c a a 6 9 9 9 9 9 9 9 f . 
        . . f c a a 6 6 9 9 9 9 9 9 f . 
        . . f c a a a 6 6 6 9 9 9 a f . 
        . . f c a a a a a a a a a a f . 
        . . f c a a a a a a a a a a f . 
        . . f c a a a a a a a a a a f . 
        . . f c c a a a a a a a a f . . 
        . . . f c c c f f a a a f . . . 
        . . . f c c c f f a a a f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e 2 2 2 2 2 2 2 2 2 f . . 
        . f e e 2 2 6 9 9 9 9 9 1 1 f . 
        . f e e 2 2 6 9 9 9 9 9 9 1 f . 
        . f e e 2 2 6 9 9 9 9 9 9 9 f . 
        . f e e 2 2 6 9 9 9 9 9 9 9 f . 
        . . f e 2 2 6 6 9 9 9 9 9 9 f . 
        . . f e 2 2 2 6 6 6 9 9 9 2 f . 
        . . f e 2 2 2 2 2 2 2 2 2 2 f . 
        . . f e 2 2 2 2 2 2 2 2 2 2 f . 
        . . f e 2 2 2 2 2 2 2 2 2 2 f . 
        . . f e e 2 2 2 2 2 2 2 2 f . . 
        . . . f e e e f f 2 2 2 f . . . 
        . . . f e e e f f 2 2 2 f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 4 4 5 5 6 9 9 9 9 9 1 1 f . 
        . f 4 4 5 5 6 9 9 9 9 9 9 1 f . 
        . f 4 4 5 5 6 9 9 9 9 9 9 9 f . 
        . f 4 4 5 5 6 9 9 9 9 9 9 9 f . 
        . . f 4 5 5 6 6 9 9 9 9 9 9 f . 
        . . f 4 5 5 5 6 6 6 9 9 9 5 f . 
        . . f 4 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 4 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 4 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 4 4 5 5 5 5 5 5 5 5 f . . 
        . . . f 4 4 4 f f 5 5 5 f . . . 
        . . . f 4 4 4 f f 5 5 5 f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f b f f f f f f f f f f . . 
        . f b b f f 6 9 9 9 9 9 1 1 f . 
        . f b b f f 6 9 9 9 9 9 9 1 f . 
        . f b b f f 6 9 9 9 9 9 9 9 f . 
        . f b b f f 6 9 9 9 9 9 9 9 f . 
        . . f b f f 6 6 9 9 9 9 9 9 f . 
        . . f b f f f 6 6 6 9 9 9 f f . 
        . . f b f f f f f f f f f f f . 
        . . f b f f f f f f f f f f f . 
        . . f b f f f f f f f f f f f . 
        . . f b b f f f f f f f f f . . 
        . . . f b b b f f f f f f . . . 
        . . . f b b b f f f f f f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f 6 7 7 7 7 7 7 7 7 7 f . . 
        . f 6 6 7 7 6 9 9 9 9 9 1 1 f . 
        . f 6 6 7 7 6 9 9 9 9 9 9 1 f . 
        . f 6 6 7 7 6 9 9 9 9 9 9 9 f . 
        . f 6 6 7 7 6 9 9 9 9 9 9 9 f . 
        . . f 6 7 7 6 6 9 9 9 9 9 9 f . 
        . . f 6 7 7 7 6 6 6 9 9 9 7 f . 
        . . f 6 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 6 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 6 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 6 6 7 7 7 7 7 7 7 7 f . . 
        . . . f 6 6 6 f f 7 7 7 f . . . 
        . . . f 6 6 6 f f 7 7 7 f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f d 1 1 1 1 1 1 1 1 1 f . . 
        . f d d 1 1 d 9 9 9 9 9 1 1 f . 
        . f d d 1 1 d 9 9 9 9 9 9 1 f . 
        . f d d 1 1 d 9 9 9 9 9 9 9 f . 
        . f d d 1 1 d 9 9 9 9 9 9 9 f . 
        . . f d 1 1 d d 9 9 9 9 9 9 f . 
        . . f d 1 1 1 d d d 9 9 9 1 f . 
        . . f d 1 1 1 1 1 1 1 1 1 1 f . 
        . . f d 1 1 1 1 1 1 1 1 1 1 f . 
        . . f d 1 1 1 1 1 1 1 1 1 1 f . 
        . . f d d 1 1 1 1 1 1 1 1 f . . 
        . . . f d d d f f 1 1 1 f . . . 
        . . . f d d d f f 1 1 1 f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player),
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e 4 4 4 4 4 4 4 4 4 f . . 
        . f e e 4 4 6 9 9 9 9 9 1 1 f . 
        . f e e 4 4 6 9 9 9 9 9 9 1 f . 
        . f e e 4 4 6 9 9 9 9 9 9 9 f . 
        . f e e 4 4 6 9 9 9 9 9 9 9 f . 
        . . f e 4 4 6 6 9 9 9 9 9 9 f . 
        . . f e 4 4 4 6 6 6 9 9 9 4 f . 
        . . f e 4 4 4 4 4 4 4 4 4 4 f . 
        . . f e 4 4 4 4 4 4 4 4 4 4 f . 
        . . f e 4 4 4 4 4 4 4 4 4 4 f . 
        . . f e e 4 4 4 4 4 4 4 4 f . . 
        . . . f e e e f f 4 4 4 f . . . 
        . . . f e e e f f 4 4 4 f . . . 
        . . . . f f f . . f f f . . . . 
        `, SpriteKind.Player)
    ]
    list2 = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
    ]
    kill = [
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    for (let value of Commanda) {
        tiles.placeOnRandomTile(value, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    Commanda[randint(0, Commanda.length - 1)].setKind(SpriteKind.Enemy)
    Meteor = []
    ScorMeteor = randint(5, 20)
    for (let index = 0; index <= ScorMeteor - 1; index++) {
        Meteor.unshift(sprites.create(img`
            . . . . . . . c c c a c . . . . 
            . . c c b b b a c a a a c . . . 
            . c c a b a c b a a a b c c . . 
            . c a b c f f f b a b b b a . . 
            . c a c f f f 8 a b b b b b a . 
            . c a 8 f f 8 c a b b b b b a . 
            c c c a c c c c a b c f a b c c 
            c c a a a c c c a c f f c b b a 
            c c a b 6 a c c a f f c c b b a 
            c a b c 8 6 c c a a a b b c b c 
            c a c f f a c c a f a c c c b . 
            c a 8 f c c b a f f c b c c c . 
            . c b c c c c b f c a b b a c . 
            . . a b b b b b b b b b b b c . 
            . . . c c c c b b b b b c c . . 
            . . . . . . . . c b b c . . . . 
            `, SpriteKind.Meteor))
        tiles.placeOnRandomTile(Meteor[0], assets.tile`myTile1`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value, assets.tile`tile6`)
    }
}
scene.onOverlapTile(SpriteKind.Im, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleBlueCrystal)
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Meteor, function (sprite, otherSprite) {
    destroyMeteor(otherSprite)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile6`, function (sprite, location) {
    if (sprite.vx == 0 - speed) {
        sprite.vx = 0 - speed / 7
    } else if (sprite.vx == speed) {
        sprite.vx = speed / 7
    } else if (sprite.vy == 0 - speed) {
        sprite.vy = 0 - speed / 7
    } else if (sprite.vy == speed) {
        sprite.vy = speed / 7
    }
})
function destroyMeteor (mySprite: Sprite) {
    mySprite.destroy(effects.fire, 500)
    Meteor.removeAt(Meteor.indexOf(mySprite))
    if (Meteor.length == 0) {
        if (tiles.getTilesByType(assets.tile`tile-off`).length == 0) {
            game.splash("Двигатели запущены. Путь свободен! К звездам!")
            runBust = tiles.getTilesByType(assets.tile`tile12`)
            for (let value of runBust) {
                tiles.setTileAt(value, assets.tile`tile13`)
            }
        } else {
            game.splash("Путь свободен! Запустите двигатели!")
        }
    }
}
function doTestTaskComplit () {
    if (Meteor.length == 0) {
        game.splash("Двигатели запущены. Путь свободен! К звездам!")
        runBust = tiles.getTilesByType(assets.tile`tile12`)
        for (let value of runBust) {
            tiles.setTileAt(value, assets.tile`tile13`)
        }
    } else {
        game.splash("Двигатели запущены. Удали метеориты!")
    }
}
sprites.onOverlap(SpriteKind.Im, SpriteKind.Meteor, function (sprite, otherSprite) {
    destroyMeteor(otherSprite)
})
scene.onOverlapTile(SpriteKind.Im, assets.tile`tile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile2`)
    info.setScore(tiles.getTilesByType(assets.tile`tile1`).length)
    if (info.score() == 0) {
        levelFinish()
        level_select()
        levelStart()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f c b c f c b c f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f c b c f f f f f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f f f f f f f . 
        . . f c b c f . . . . . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f c b c f f f f f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f c b c f c b c f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f f f f f c b c f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f d 1 b f d 1 b f b c f 
        . . f f f f f 1 1 b f f f . 
        . . . . . . f c b c f . . . 
        `,img`
        . . f f f f f f f f . . . . 
        . f f 1 1 1 1 1 1 c f . . . 
        f c 1 1 1 1 1 1 1 1 d f . . 
        f f f f f f f f d 1 1 f . . 
        f 5 5 5 f f f f f b 1 f f . 
        f f 5 5 5 f f f f c 1 f c f 
        f f f 5 5 5 f f f c 1 f 1 f 
        f f f f 5 f f f c d 1 f c f 
        f b d d b d d d 1 d f b b f 
        f b d d d d d d d c f 1 1 f 
        . f f f f f f f f f f 1 1 f 
        . . f b d 1 b c d c f 1 1 f 
        . . f f f f f d 1 b f b c f 
        . . f d 1 b f 1 1 b f f f . 
        . . f f f f f c b c f . . . 
        `],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
    })
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile2`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile1`)
    info.setScore(tiles.getTilesByType(assets.tile`tile1`).length)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile2`)
    info.setScore(tiles.getTilesByType(assets.tile`tile1`).length)
    if (info.score() == 0) {
        levelFinish()
        level_select()
        levelStart()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f c b c f c b c f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f f f f f c b c f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f f f f f b 1 d f . . 
        . . . . . . . f c b c f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f f f f f c b c f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f c b c f c b c f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f c b c f f f f f . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f b 1 d f . . 
        . f f f b 1 1 f f f f f . . 
        . . . f c b c f . . . . . . 
        `,img`
        . . . . f f f f f f f f . . 
        . . . f c 1 1 1 1 1 1 f f . 
        . . f d 1 1 1 1 1 1 1 1 c f 
        . . f 1 1 d f f f f f f f f 
        . f f 1 b f f f f f 5 5 5 f 
        f c f 1 c f f f f 5 5 5 f f 
        f 1 f 1 c f f f 5 5 5 f f f 
        f c f 1 d c f f f 5 f f f f 
        f b b f d 1 d d d b d d b f 
        f 1 1 f c d d d d d d d b f 
        f 1 1 f f f f f f f f f f . 
        f 1 1 f c d c b 1 d b f . . 
        f c b f b 1 d f f f f f . . 
        . f f f b 1 1 f b 1 d f . . 
        . . . f c b c f f f f f . . 
        `],
    50,
    true
    )
})
scene.onOverlapTile(SpriteKind.Im, assets.tile`tile13`, function (sprite, location) {
    levelFinish()
    level_select()
    levelStart()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    if (sprite.vx == 0 - speed) {
        sprite.vx = 0 - speed / 7
    } else if (sprite.vx == speed) {
        sprite.vx = speed / 7
    } else if (sprite.vy == 0 - speed) {
        sprite.vy = 0 - speed / 7
    } else if (sprite.vy == speed) {
        sprite.vy = speed / 7
    }
})
scene.onOverlapTile(SpriteKind.Im, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleRedCrystal)
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onHitWall(SpriteKind.Im, function (sprite, location) {
    if (controller.A.isPressed() && tiles.tileAtLocationEquals(location, sprites.dungeon.floorLight5)) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, assets.tile`transparency16`)
        scene.cameraShake(4, 200)
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function (sprite, location) {
    if (sprite.vx == 0 - speed / 7) {
        sprite.vx = 0 - speed
    } else if (sprite.vx == speed / 7) {
        sprite.vx = speed
    } else if (sprite.vy == 0 - speed / 7) {
        sprite.vy = 0 - speed
    } else if (sprite.vy == speed / 7) {
        sprite.vy = speed
    }
})
function level_select () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level4`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level5`)
    } else {
        game.showLongText("Если ты хочешь написать другие уровни или создать собственную игру, записывайся на бесплатный мастер-класс по программированию MakeCode по телефону +7(999)801-25-03 Клуб \"ВОСЬМОЙ БИТ\"", DialogLayout.Full)
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Im, assets.tile`tile-off`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`tile9`)
    if (tiles.getTilesByType(assets.tile`tile-off`).length == 0) {
        fire1 = tiles.getTilesByType(assets.tile`tile8`)
        fare2 = tiles.getTilesByType(assets.tile`tile7`)
        for (let value2 of fire1) {
            tiles.setTileAt(value2, assets.tile`tile`)
            tiles.setWallAt(value2, true)
        }
        for (let value3 of fare2) {
            tiles.setTileAt(value3, assets.tile`tile0`)
            tiles.setWallAt(value3, true)
        }
        doTestTaskComplit()
    }
})
scene.onOverlapTile(SpriteKind.Im, assets.tile`tile6`, function (sprite, location) {
    controller.moveSprite(mySprite, 15, 15)
})
scene.onOverlapTile(SpriteKind.Im, assets.tile`transparency16`, function (sprite, location) {
    controller.moveSprite(mySprite, 150, 150)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (sprite.vx == 0 - speed / 7) {
        sprite.vx = 0 - speed
    } else if (sprite.vx == speed / 7) {
        sprite.vx = speed
    } else if (sprite.vy == 0 - speed / 7) {
        sprite.vy = 0 - speed
    } else if (sprite.vy == speed / 7) {
        sprite.vy = speed
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleBlueCrystal)
    })
})
function levelFinish () {
    level += 1
    game.splash("Уровень " + ("" + level) + " пройден! Готов к следующему уровню?")
    for (let value4 of Commanda) {
        value4.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    timer.throttle("action", 1000, function () {
        tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleBlueCrystal)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    kill[Commanda.indexOf(sprite)] = 1
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . f 1 1 f f . . . . . 
        . . . . f f 2 1 1 2 2 f f . . . 
        . . f f 2 2 2 1 1 2 2 2 2 f f . 
        . . f e f f 2 2 2 2 2 f f 2 f . 
        . . f e 2 2 f f f f f 2 2 2 f . 
        . . f e e 2 2 2 2 2 2 2 2 f . . 
        . . . f e e e f f 2 2 2 f . . . 
        . . . f e e e f f 2 2 2 f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    sprite.setKind(SpriteKind.Trup)
    sprite.setVelocity(0, 0)
    sprite.startEffect(effects.starField, 500)
})
let fare2: tiles.Location[] = []
let fire1: tiles.Location[] = []
let runBust: tiles.Location[] = []
let ScorMeteor = 0
let Meteor: Sprite[] = []
let kill: number[] = []
let list2: number[] = []
let Commanda: Sprite[] = []
let mySprite: Sprite = null
let speed = 0
let level = 0
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ........................8888888.................................................................................................................................
    ........................8888888.................................................................................................................................
    .......................88888888.................................................................................................................................
    .......................88888888.................................................................................................................................
    ......................8888888888................................................................................................................................
    .....................88888888888................................................................................................................................
    .....................88888888888................................................................................................................................
    .....................88888888888................................................................................................................................
    ....................8888888888888...............................................................................................................................
    ....................8888888888888...............................................................................................................................
    ....................888888.888888...............................................................................................................................
    ...................8888888.8888888..............................................................................................................................
    ...................8888888..8888888.............................................................................................................................
    ...................888888...8888888.............................................................................................................................
    ...................888888...8888888.............................................................................................................................
    ..................888888.....888888.............................................................................................................................
    ..................888888......88888.............................................................................................................................
    ..................888888......88888.............................................................................................................................
    ..................888888......88888.............................................................................................................................
    .................888888.......888888............................................................................................................................
    .................888888.......888888............................................................................................................................
    .................888888.......888888........88888.888888888.....................................................................................................
    .................888888.......8888888.......888888888888888888888888888................8888888..................................................................
    ................888888.........888888.......8888888888888888888888888888..........888888888888888...............................................................
    ................888888.........888888.......888888888888888888888888888888.......88888888888888888.......8888888888888..........................................
    ................888888.........888888.......888888888888888888888888888888.......888888888888888888......88888888888888................888888888................
    ...............8888888..........888888......8888888888888888888888888888888.....88888888888888888888.....888888888888888............88888888888888..............
    ...............8888888..........888888......888888888.8888888888...88888888....8888888888888888888888...88888888888888888.........8888888888888888..............
    ...............88888888888888888888888......88888......888888.......8888888....8888888.......88888888...88888888888888888.........8888888888888888..............
    ...............88888888888888888888888......88888......888888........888888....8888888........8888888...888888888888888888......888888888888888888..............
    ..............8888888888888888888888888.....88888.......88888........888888....888888..........888888...888888.....8888888......88888888888.888888..............
    ..............8888888888888888888888888.....88888.......88888.........88888....888888...........88888...88888.......8888888....888888888.....88888..............
    ..............8888888888888888888888888.....88888.......88888.........88888....88888...........888888...88888.......8888888...888888888......88888..............
    ..............88888888888888888888888888....88888.......88888.........88888....88888...........888888...88888........888888..888888888......888888..............
    ..............88888...............888888....88888.......88888.........88888....88888..........8888888...88888........888888..88888888.......888888..............
    .............888888...............888888....88888.......88888.........88888....88888..........8888888...88888.........88888.88888888.......8888888..............
    .............888888...............888888....88888.......88888........888888....88888.........8888888....88888.........88888.8888888.......888888888.............
    .............888888...............8888888...88888.......88888........888888....88888.........8888888....88888.........88888.888888........888888888.............
    .............888888................888888...88888.......88888........888888....888888.......88888888....88888.........88888.888888.......8888888888.............
    ............888888.................888888...88888.......88888........888888....8888888...8888888888.....88888.........88888.88888........8888888888.............
    ............888888.................888888...88888.......88888........888888....8888888..8888888888......88888.........88888.88888.......88888888888.............
    ............888888..................88888...88888.......88888........88888.....8888888888888888888......88888.........88888.8888888...8888888888888.............
    ............888888..................88888...88888.......88888........88888......88888888888888888.......88888.........88888.888888888888888888888888............
    ............88888...................88888...88888.......88888........88888......8888888888888888........88888.........88888.888888888888888888888888............
    ............88888...................88888...88888....................88888.......888888888888...........88888.........88888.88888888888888888.888888............
    ..................................................................................88888888888...........88888................888888888888888..888888............
    ........................................................................................................88888..................888888888888....88888............
    .................................................................................................................................888888........88888............
    ...............................................................................................................................................88888............
    ..............................................................................................................................................888888............
    ...........................................................22222..............................................................................888888............
    ....................................22222..................22222.................22222222222222...............................................888888............
    ....................................22222..................22222.............222222222222222222..........................88888...............8888888............
    ....................................22222..................22222...........22222222222222222222..........................888888.............8888888.............
    ....................................22222..................22222..........222222222222222222222..........................88888888.........888888888.............
    ....................................22222..................22222..........222222222222222222222..........................88888888888....88888888888.............
    ...................................222222..................22222.........2222222222222...................................8888888888888888888888888..............
    ...................................222222..................22222.........22222222........................................8888888888888888888888888..............
    ...................................222222.................222222.........222222............................................8888888888888888888888...............
    ...................................222222.................222222.........222222..............................................888888888888888888.................
    ...................................22222..................222222.........222222.................................................888888888888....................
    ...................................222222.................222222.........2222222................................................................................
    ...................................222222.................222222.........222222222..............................................................................
    ...................................222222.................22222..........2222222222222222.......................................................................
    ...................................222222.................22222...........222222222222222222....................................................................
    ....................................222222................22222...........2222222222222222222...................................................................
    ....................................222222...............222222.............2222222222222222222.................................................................
    ....................................222222...............222222...............22222222222222222.................................................................
    ....................................2222222.............2222222......................22222222222................................................................
    .....................................222222.............2222222........................222222222................................................................
    .....................................2222222...........2222222...........................2222222................................................................
    .....................................2222222..........22222222............................222222................................................................
    ......................................222222..........22222222............................222222................................................................
    ......................................2222222........22222222............................2222222................................................................
    .......................................2222222......22222222............2222222.......2222222222................................................................
    .......................................222222222...222222222............222222222222222222222222................................................................
    .......................................22222222222222222222.............222222222222222222222222................................................................
    ........................................222222222222222222..............22222222222222222222222.................................................................
    .........................................22222222222222222..............2222222222222222222222..................................................................
    .........................................222222222222222..................22222222222222222.....................................................................
    ...........................................222222222222.........................................................................................................
    .............................................2222222............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
music.playMelody("B A G A G F A C5 ", 300)
music.playMelody("B A G A G F A C5 ", 300)
game.showLongText("Клуб \"ВОСЬМОЙ БИТ\" представляет игру AmongUs v.2", DialogLayout.Bottom)
game.showLongText("запись на ON-Line занятия по MeowBit: +7(999)801-2503", DialogLayout.Bottom)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 . . . 8 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . . . . . . . . 8 8 . . . . 
    . . . . . . . . . . 8 8 . . . . 
    . . . . . . . . . 8 8 8 . . . . 
    . . . . . . . 8 8 8 8 . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Задача: активировать все терминалы для запуска всех систем корабля.", DialogLayout.Bottom)
game.showLongText("Задача: запустить двигатели и уничтожить все метеориты", DialogLayout.Bottom)
game.showLongText("Задача: нажать кнопку ON, для старта", DialogLayout.Bottom)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Стены с трещинами можно пробивать кнопкой \"А\"", DialogLayout.Bottom)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("Но, берегись предателя! Кто он?! Догадайся сам!", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
info.setLife(4)
level = 1
speed = 200
level_select()
levelStart()
mySprite = sprites.create(img`
    . . . . f f f f f f f f . . 
    . . . f c 1 1 1 1 1 1 f f . 
    . . f d 1 1 1 1 1 1 1 1 c f 
    . . f 1 1 d f f f f f f f f 
    . f f 1 b f f f f f 5 5 5 f 
    f c f 1 c f f f f 5 5 5 f f 
    f 1 f 1 c f f f 5 5 5 f f f 
    f c f 1 d c f f f 5 f f f f 
    f b b f d 1 d d d b d d b f 
    f 1 1 f c d d d d d d d b f 
    f 1 1 f f f f f f f f f f . 
    f 1 1 f c d c b 1 d b f . . 
    f c b f b 1 d f f f f f . . 
    . f f f b 1 1 f b 1 d f . . 
    . . . f c b c f c b c f . . 
    `, SpriteKind.Im)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
game.onUpdateInterval(500, function () {
    for (let value22 of Commanda) {
        if (value22.kind() != SpriteKind.Trup) {
            if (list2[Commanda.indexOf(value22)] == -1) {
                value22.vy = 0 - speed
            } else if (list2[Commanda.indexOf(value22)] == 1) {
                value22.vy = speed
            } else if (list2[Commanda.indexOf(value22)] == -2) {
                value22.vx = 0 - speed
            } else if (list2[Commanda.indexOf(value22)] == 2) {
                value22.vx = speed
            }
            if (value22.isHittingTile(CollisionDirection.Left) || (value22.isHittingTile(CollisionDirection.Right) || (value22.isHittingTile(CollisionDirection.Top) || value22.isHittingTile(CollisionDirection.Bottom)))) {
                if (Math.percentChance(60)) {
                    list2[Commanda.indexOf(value22)] = list2[Commanda.indexOf(value22)] * -1
                } else if (Math.abs(list2[Commanda.indexOf(value22)]) == 1) {
                    list2[Commanda.indexOf(value22)] = 2
                } else if (Math.abs(list2[Commanda.indexOf(value22)]) == 2) {
                    list2[Commanda.indexOf(value22)] = 1
                }
            }
        }
    }
    if (sprites.allOfKind(SpriteKind.Player).length == 0) {
        game.showLongText("Вся ваша команда погибла...", DialogLayout.Bottom)
        game.over(false)
    }
})

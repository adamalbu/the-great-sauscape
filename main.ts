namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (Sausage, Goal) {
    Lv_no += 1
    pause(100)
    if (Lv_no == 2) {
        Sausage.setPosition(155, 112)
        Door.setPosition(5, 112)
    }
    if (Lv_no == 3) {
        Sausage.say("WOO! I CAN FLY!!!!!!!!!!")
        pause(500)
        Sausage.say("")
        Door.setPosition(5, 10)
    }
    if (Lv_no == 4) {
        Door.setPosition(155, 10)
    }
    if (Lv_no == 5) {
        Door.setPosition(5, 10)
    }
    if (Lv_no == 6){
        
    }
})
let Door: Sprite = null
let Lv_no = 0
Lv_no = 1
scene.setBackgroundColor(9)
// Door: 10x20 px
Door = sprites.create(img`
    e e e e e e e e e e
    e d d e d d e d d e
    e d d e d d e d d e
    e e e e e e e e e e
    e d d e d d e d d e
    e d d e d d e d d e
    e e e e e e e e e e
    e d d e d d e d d e
    e d d e d d e d d e
    e e e e e e e e e e
    e e e e e e e e e e
    e e e e e e e e e e
    e e e e e e e 5 e e
    e e e e e e 5 5 5 e
    e e e e e e e 5 e e
    e e e e e e e e e e
    e e e e e e e e e e
    e e e e e e e e e e
    e e e e e e e e e e
    e e e e e e e e e e
`, SpriteKind.Goal)
// Door: 10x20 px
Door.setPosition(155, 110)
// Sausage: 8x15 px
Sausage.setPosition(4, 112)
Sausage.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(Sausage, 100, 100)
forever(function () {
    if (Lv_no == 1 || Lv_no == 2 || Lv_no == 5) {
        if (Sausage.y != 112) {
            Sausage.y = 112
        }
    }
})

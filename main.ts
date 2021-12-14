function planeTicket () {
    if (checkMoney()) {
        plane = sprites.create(img`
            ....ffffff.........ccc..
            ....ff22ccf.......cc4f..
            .....ffccccfff...cc44f..
            ....cc24442222cccc442f..
            ...c9b4422222222cc422f..
            ..c999b2222222222222fc..
            .c2b99111b222222222c22c.
            c222b111992222ccccccc22f
            f222222222222c222ccfffff
            .f2222222222442222f.....
            ..ff2222222cf442222f....
            ....ffffffffff442222c...
            .........f2cfffc2222c...
            .........fcc2ffffffff...
            ..........fc2ffff.......
            ...........fffff........
            `, SpriteKind.Player)
        plane.sayText("Vacation!")
    } else {
        noPlane = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 . . . . . . . 2 . . . . 
            . . . . 2 . . . . . 2 . . . . . 
            . . . . . 2 . . . 2 . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . 2 . . . 2 . . . . . . 
            . . . . 2 . . . . . 2 . . . . . 
            . . . 2 . . . . . . . 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        noPlane.sayText("No vacation.")
    }
}
function ticketCost (ticketPrice: number) {
    totalCost = ticketPrice
    return totalCost
}
function checkMoney () {
    if (Money > ticketCost(100)) {
        return true
    } else {
        return false
    }
}
let totalCost = 0
let noPlane: Sprite = null
let plane: Sprite = null
let Money = 0
Money = game.askForNumber("How much money do you have?", 4)
planeTicket()

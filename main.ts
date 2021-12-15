function PS5cost (ps5Cost: number) {
    totalCost = ps5Cost
    return totalCost
}
function checkMoney () {
    if (Money > PS5cost(500)) {
        return true
    } else {
        return false
    }
}
function PS5 () {
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
        pause(2000)
        while (Money < PS5cost(500)) {
            askPS5 = game.askForString("Do you have more money?", 3)
            if (askPS5 == "yes") {
                newMoney = game.askForNumber("How much?")
                if (newMoney > PS5cost(500)) {
                    checkMoney()
                }
            }
        }
    }
}
let newMoney = 0
let askPS5 = ""
let noPlane: Sprite = null
let plane: Sprite = null
let totalCost = 0
let Money = 0
Money = game.askForNumber("How much money do you have?", 4)
PS5()

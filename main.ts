let kto_vyhrava = 0
let ruka = 0
input.onButtonPressed(Button.A, function () {
    kto_vyhrava += 1
})
input.onButtonPressed(Button.AB, function () {
    kto_vyhrava = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(kto_vyhrava)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    ruka = randint(1, 3)
    if (ruka == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (ruka == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else if (ruka == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})

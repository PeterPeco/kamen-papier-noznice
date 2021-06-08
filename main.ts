let ruka = 0
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

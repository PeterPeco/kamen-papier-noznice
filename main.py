ruka = 0

def on_gesture_shake():
    global ruka
    ruka = randint(1, 3)
    if ruka == 1:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.pause(500)
        basic.clear_screen()
    elif ruka == 2:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(500)
        basic.clear_screen()
    elif ruka == 3:
        basic.show_leds("""
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            """)
        basic.pause(500)
        basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)

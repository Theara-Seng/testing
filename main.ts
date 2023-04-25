WSJoyStick.onKEYs(KEYs.P, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # . . #
        . # # # .
        `)
})
WSJoyStick.onKey(KEY.C, function () {
    WSJoyStick.PlayMusic(262, music.beat(BeatFraction.Whole))
})
WSJoyStick.JoyStickInit()

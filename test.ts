joysticker.onKEYs(KEYs.P, () => {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `)
})
joysticker.onKEYs(KEYs.A, () => {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
})
joysticker.onKEYs(KEYs.B, () => {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # # # .
        `)
})
joysticker.onKEYs(KEYs.C, () => {
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
})
joysticker.onKEYs(KEYs.D, () => {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
})
joysticker.onKEYs(KEYs.F, () => {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
})
joysticker.onKEYs(KEYs.E, () => {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
})
joysticker.JoyStickInits()
joysticker.PlayMusics(262, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(294, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(330, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(349, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(392, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(440, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(494, music.beat(BeatFraction.Whole))
joysticker.PlayMusics(523, music.beat(BeatFraction.Whole))
basic.forever(() => {
    if (joysticker.Listen_Dirs(DIRS.U)) {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.D)) {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.L)) {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.R)) {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.U_R)) {
        images.arrowImage(ArrowNames.NorthEast).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.D_R)) {
        images.arrowImage(ArrowNames.SouthEast).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.U_L)) {
        images.arrowImage(ArrowNames.NorthWest).showImage(0)
    } else if (joysticker.Listen_Dirs(DIRS.D_L)) {
        images.arrowImage(ArrowNames.SouthWest).showImage(0)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

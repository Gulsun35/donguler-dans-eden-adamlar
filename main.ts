input.onButtonPressed(Button.A, function () {
    Tekrar_sayısí += 1
    basic.showNumber(Tekrar_sayısí)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < Tekrar_sayısí; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # # #
            . . # . .
            . # # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            # # # . .
            . . # . .
            . . # # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
    }
})
let Tekrar_sayısí = 0
Tekrar_sayısí = 0

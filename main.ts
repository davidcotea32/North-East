input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.SouthEast)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            . # . # .
            . . # . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.NorthEast)
})
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
basic.showString("Hello,welcome to my first project")
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.showString("This project is discontinued!")
basic.showIcon(IconNames.Sad)

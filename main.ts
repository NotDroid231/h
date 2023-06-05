input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 99; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    for (let index = 0; index < 99; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    for (let index = 0; index < 99; index++) {
        music.playMelody("A C5 A C5 A C5 A C5 ", 999)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    basic.pause(100)
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    control.reset()
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    basic.pause(100)
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    control.reset()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        music.playMelody("C5 C5 C5 C5 B B B B ", 999)
    }
})

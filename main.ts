basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.A)
    for (let index = 0; index < 99; index++) {
        music.playMelody("C5 C5 C5 C5 G G G G ", 999)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.B)
    for (let index = 0; index < 99; index++) {
        music.playMelody("B A B C5 B A B C5 ", 999)
    }
})
basic.forever(function () {
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    pins.digitalWritePin(DigitalPin.P2, 1)
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    for (let index = 0; index < 99; index++) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    pins.digitalWritePin(DigitalPin.P2, 0)
})

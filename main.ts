let tenperatura = 0
basic.forever(function () {
    music.setVolume(255)
    tenperatura = input.temperature()
    basic.showNumber(tenperatura - 3)
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
})
basic.forever(function () {
    if (input.temperature() < 17) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (input.temperature() > 20) {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
    if (input.temperature() < 17) {
        music.setVolume(222)
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
})

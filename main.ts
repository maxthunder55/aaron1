for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
}
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(100)
})

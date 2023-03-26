input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
    if (uitvoeringsteken_nummer == 1) {
        uitkomst = getal1 + getal2
    }
    if (uitvoeringsteken_nummer == 2) {
        uitkomst = getal1 - getal2
    }
    if (uitvoeringsteken_nummer == 3) {
        uitkomst = getal1 * getal2
    }
    if (uitvoeringsteken_nummer == 4) {
        uitkomst = getal1 / getal2
    }
    basic.showString("" + getal1 + uitvoeringsteken + getal2 + "=" + uitkomst)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    getal1 += 1
    basic.showNumber(getal1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    uitvoeringsteken_nummer += 1
    if (uitvoeringsteken_nummer == 5) {
        uitvoeringsteken_nummer = 0
    }
    if (uitvoeringsteken_nummer == 1) {
        uitvoeringsteken = "+"
        basic.showString("+")
    }
    if (uitvoeringsteken_nummer == 2) {
        uitvoeringsteken = "-"
        basic.showString("-")
    }
    if (uitvoeringsteken_nummer == 3) {
        uitvoeringsteken = "*"
        basic.showString("*")
    }
    if (uitvoeringsteken_nummer == 4) {
        uitvoeringsteken = "/"
        basic.showString("/")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    getal2 += 1
    basic.showNumber(getal2)
})
let uitkomst = 0
let getal2 = 0
let getal1 = 0
let uitvoeringsteken = ""
let uitvoeringsteken_nummer = 0
uitvoeringsteken_nummer = 0
uitvoeringsteken = ""
getal1 = 0
getal2 = 0
uitkomst = 0

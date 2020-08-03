input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Role", 2)
    Role = 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "Role") {
        Role = value
        if (value == 1) {
            Rolename = "Leader"
        } else {
            Rolename = "Follower"
        }
        basic.showString("Role is " + Rolename)
    }
})
let Rolename = ""
let Role = 0
Role = 0
radio.setGroup(191)
while (Role == 0) {
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . . . . #
        . . . # .
        `)
    basic.clearScreen()
    basic.pause(100)
}
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})

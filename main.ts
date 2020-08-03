input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Player", 0)
    Player = 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "Player") {
        Player = value
        basic.showString("Hello!")
    }
})
let Player = 0
radio.setGroup(191)
basic.forever(function () {
	
})

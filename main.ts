let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = a + 1
    basic.showString("" + (a))
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("" + (a + b))
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showString("" + (b))
})
input.onGesture(Gesture.Shake, function () {
    a = 0
    b = 0
    basic.showString("" + (a + b))
})

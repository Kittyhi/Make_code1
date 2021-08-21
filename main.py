def on_button_pressed_a():
    global a
    a =a + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
a = 0
b = 0
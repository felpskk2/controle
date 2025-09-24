//  ==============================================================================
//  --- CONFIGURAÇÕES PERSONALIZÁVEIS ---
//  ==============================================================================
//  GRUPO DO RÁDIO: Deve ser o mesmo número no controle e no robô (de 0 a 255).
let RADIO_GROUP = 1
//  COMANDOS NUMÉRICOS: Agora enviaremos números que o robô entende.
//  1 = Frente, 2 = Trás, 3 = Esquerda, 4 = Direita, 5 = Parar
let CMD_FORWARD = 1
let CMD_BACKWARD = 2
let CMD_LEFT = 3
let CMD_RIGHT = 4
let CMD_STOP = 5
//  ==============================================================================
//  --- LÓGICA PRINCIPAL ---
//  ==============================================================================
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(CMD_FORWARD)
    //  ALTERADO
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(CMD_BACKWARD)
    //  ALTERADO
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    radio.sendNumber(CMD_LEFT)
    //  ALTERADO
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    radio.sendNumber(CMD_RIGHT)
    //  ALTERADO
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendNumber(CMD_STOP)
    //  ALTERADO
    basic.showIcon(IconNames.No)
})
//  Configuração inicial
radio.setGroup(RADIO_GROUP)
basic.showIcon(IconNames.Target)

//  ==============================================================================
//  --- CONFIGURAÇÕES PERSONALIZÁVEIS ---
//  Altere os valores aqui para customizar seu controle remoto.
//  ==============================================================================
//  GRUPO DO RÁDIO: Deve ser o mesmo número no controle e no robô (de 0 a 255).
let RADIO_GROUP = 1
//  COMANDOS DE TEXTO: Você pode mudar os textos que são enviados via rádio.
//  Lembre-se de usar os mesmos textos no código do robô!
let CMD_FORWARD = "1"
let CMD_BACKWARD = "B"
let CMD_LEFT = "E"
let CMD_RIGHT = "D"
let CMD_STOP = "S"
//  ==============================================================================
//  --- LÓGICA PRINCIPAL ---
//  Não é necessário alterar o código abaixo desta linha.
//  ==============================================================================
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString(CMD_FORWARD)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendString(CMD_BACKWARD)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    radio.sendString(CMD_LEFT)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    radio.sendString(CMD_RIGHT)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendString(CMD_STOP)
    basic.showIcon(IconNames.No)
})
//  Configuração inicial
radio.setGroup(RADIO_GROUP)
basic.showIcon(IconNames.Target)

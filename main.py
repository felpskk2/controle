# ==============================================================================
# --- CONFIGURAÇÕES PERSONALIZÁVEIS ---
# ==============================================================================

# GRUPO DO RÁDIO: Deve ser o mesmo número no controle e no robô (de 0 a 255).
RADIO_GROUP = 1

# COMANDOS NUMÉRICOS: Agora enviaremos números que o robô entende.
# 1 = Frente, 2 = Trás, 3 = Esquerda, 4 = Direita, 5 = Parar
CMD_FORWARD = 1
CMD_BACKWARD = 2
CMD_LEFT = 3
CMD_RIGHT = 4
CMD_STOP = 5

# ==============================================================================
# --- LÓGICA PRINCIPAL ---
# ==============================================================================

def on_button_pressed_a():
    radio.send_number(CMD_FORWARD) # ALTERADO
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(CMD_BACKWARD) # ALTERADO
    basic.show_arrow(ArrowNames.SOUTH)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_left():
    radio.send_number(CMD_LEFT) # ALTERADO
    basic.show_arrow(ArrowNames.WEST)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    radio.send_number(CMD_RIGHT) # ALTERADO
    basic.show_arrow(ArrowNames.EAST)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_ab():
    radio.send_number(CMD_STOP) # ALTERADO
    basic.show_icon(IconNames.NO)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Configuração inicial
radio.set_group(RADIO_GROUP)
basic.show_icon(IconNames.TARGET)
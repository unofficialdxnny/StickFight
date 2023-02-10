import pygame
from pygame.locals import *
from pygame import mixer
from moviepy.editor import *
import keyboard as kb
import json
from time import sleep
import os


os.system('cls')


f = open('settings.json')
data = json.load(f)


X_POSITION, Y_POSITION = 1300, 500
color_bg = (0, 0, 0)
color_text = (200, 200, 200)
play_button_clicked = False
running = True
clock = pygame.time.Clock()


jumping = False

    
pygame.init()
screen = pygame.display.set_mode((X_POSITION, Y_POSITION))
pygame.display.set_caption("StickFight | Main")

1 == mixer.music.load('BGMPotentialKav.wav')
mixer.music.play(1)
logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)




clip = VideoFileClip('Loading.mp4')



clip.preview()

surface = pygame.display.set_mode((X_POSITION, Y_POSITION))



Y_GRAVITY = 0.6
JUMP_HEIGHT = 20
Y_VELOCITY = JUMP_HEIGHT
   
menuColor = (80, 18, 25)
surface.fill(menuColor)
playBtn = pygame.image.load('Play.png').convert_alpha()


mouse_position = pygame.mouse.get_pos()


class Buttons():
    def __init__(self, x, y,  image):
        self.image = image
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)
        self.screen_rect = screen.get_rect()

    def draw(self):
        surface.blit(self.image, (self.rect.x, self.rect.y))

pygame.display.set_caption('StickFight | Main Menu')
        
screen.fill(menuColor)

play_button = Buttons(350, 200, playBtn)

play_button.draw()

pygame.display.update()




if kb.read_key('p'):

    
    levelOne = pygame.image.load('levelOne.png').convert_alpha()
    
    level = pygame.transform.scale(levelOne, (X_POSITION, Y_POSITION))
    
    

    pygame.display.set_caption('StickFight | Level One')
        ## if event.type == pygame.MOUSEBUTTONDOWN:
        ##     mx, my = pygame.mouse.get_pos()
        ##      print(mx, my)
        ##     ## play_button_clicked = True if playBtn. else False

    idle_sprite = pygame.image.load('IDLE.png').convert_alpha()
    jumping_sprite = pygame.image.load('jump.png').convert_alpha()

    stick_rect = idle_sprite.get_rect(center=(X_POSITION, Y_POSITION))


   


    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        surface.blit(levelOne, (0, 0))
        surface.blit(idle_sprite, (0, 300))

        keys_pressed = pygame.key.get_pressed()

        if keys_pressed[pygame.K_SPACE]:
            jumping = True

            Y_POSITION -= Y_VELOCITY
            Y_VELOCITY -= Y_GRAVITY
        
        if Y_VELOCITY < -JUMP_HEIGHT:
            jumping = False
            Y_VELOCITY = JUMP_HEIGHT


        clock.tick(30)
        pygame.display.update()

    

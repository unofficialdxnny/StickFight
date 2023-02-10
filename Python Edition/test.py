import pygame
from pygame.locals import *
from pygame import mixer
from moviepy.editor import *
import keyboard as kb
import json
from time import sleep
import time
import os

start_time=time.time() 

os.system('cls')
pygame.init()

CLOCK = pygame.time.Clock()
SCREEN = pygame.display.set_mode((1300, 500))


X_POSITION, Y_POSITION = 80, 450

jumping = False

Y_GRAVITY = 0.6
JUMP_HEIGHT = 10
Y_VELOCITY = JUMP_HEIGHT

STANDING_SURFACE = pygame.transform.scale(pygame.image.load("IDLE.png"), (50, 64))
JUMPING_SURFACE = pygame.transform.scale(pygame.image.load("jump.png"), (50, 64))
BACKGROUND = pygame.image.load("levelOne.png")

stick_rect = (0, 300)

score = 0

1 == mixer.music.load('BGMPotentialKav.wav')
mixer.music.play(1)
logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)




clip = VideoFileClip('Loading.mp4')



clip.preview()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()



    
    
    pygame.display.set_caption(f"StickFight | Level One | Score {start_time}")
    keys_pressed = pygame.key.get_pressed()

    if keys_pressed[pygame.K_SPACE]:
        jumping = True

    SCREEN.blit(BACKGROUND, (0, 0))
    
    if jumping:
        Y_POSITION -= Y_VELOCITY
        Y_VELOCITY -= Y_GRAVITY
        if Y_VELOCITY < -JUMP_HEIGHT:
            jumping = False
            Y_VELOCITY = JUMP_HEIGHT
        stick_rect = JUMPING_SURFACE.get_rect(center=(X_POSITION, Y_POSITION))
        SCREEN.blit(JUMPING_SURFACE, stick_rect)
    else:
        stick_rect = STANDING_SURFACE.get_rect(center=(X_POSITION, Y_POSITION))
        SCREEN.blit(STANDING_SURFACE, stick_rect)
    
    



    pygame.display.update()
    CLOCK.tick(60)
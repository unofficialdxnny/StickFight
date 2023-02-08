from moviepy.editor import *
import pygame
from pygame.locals import *
from pygame import mixer
import keyboard as kb
import os
import msvcrt
from time import sleep


os.system('cls')


pygame.display.set_caption('StickFight | Loading')

surface = pygame.display.set_mode((1300, 500))


1 == mixer.music.load('BGMPotentialKav.wav')
mixer.music.play(1)
logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)


clip = VideoFileClip('Loading.mp4')



clip.preview()


pygame.display.set_caption('StickFight | Main Menu')
menuColor = (80, 18, 25)
surface.fill(menuColor)
playBtn = pygame.image.load('Play.png').convert()

surface.blit(playBtn, (0, 0))

pygame.display.update()

sleep(50)

    

pygame.quit()
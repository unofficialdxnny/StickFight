from moviepy.editor import *
import pygame
from pygame.locals import *
from pygame import mixer
import keyboard as kb
import os


os.system('cls')


pygame.display.set_caption('StickFight | Loading')

1 == mixer.music.load('BGMPotentialKav.wav')
mixer.music.play(1)
logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)


clip = VideoFileClip('Loading.mp4')
while True:
    clip.preview()



pygame.quit()
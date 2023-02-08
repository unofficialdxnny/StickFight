from moviepy.editor import *
import pygame
from pygame.locals import *
import keyboard as kb



pygame.display.set_caption('StickFight | Loading')

logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)

clip = VideoFileClip('Loading.mp4')
clip.preview()



pygame.quit()
import pygame
from pygame.locals import *
from pygame import mixer
from moviepy.editor import *


width = 800
height = 600
color_bg = (0, 0, 0)
color_text = (200, 200, 200)
button_clicked = False
running = True

    
pygame.init()
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("StickFight | Main")

1 == mixer.music.load('BGMPotentialKav.wav')
mixer.music.play(1)
logo = pygame.image.load('logo.png')
pygame.display.set_icon(logo)

self.screen_rect = screen.get_rect()


clip = VideoFileClip('Loading.mp4')



clip.preview()

surface = pygame.display.set_mode((1300, 500))
   
menuColor = (80, 18, 25)
surface.fill(menuColor)
playBtn = pygame.image.load('Play.png').convert_alpha()


mouse_position = pygame.mouse.get_pos()

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False




        

        
        

        pygame.display.set_caption('StickFight | Loading')

        



        class Buttons():
            def __init__(self, x, y,  image):
                self.image = image
                self.rect = self.image.get_rect()
                self.rect.topleft = (x, y)

            def draw(self):
                surface.blit(self.image, (self.rect.x, self.rect.y))

        pygame.display.set_caption('StickFight | Main Menu')
        
        screen.fill(menuColor)






    
        play_button = Buttons(350, 200, playBtn)

        play_button.draw()

        if event.type == pygame.MOUSEBUTTONDOWN:
            play_button_clicked = True if playBtn.collidepoint(350, 200) else False

        pygame.display.update()



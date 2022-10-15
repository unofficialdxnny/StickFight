import pygame
import json
import time
from pypresence import Presence



config = open('config.json')
config_data = json.load(config)

start_time=time.time()
client_id = "1030917447408164894"  
RPC = Presence(client_id)  
RPC.connect()
RPC.update(large_image="logo", large_text="RatEscape", state="By unofficialdxnny", details="Main Menu", start=start_time, buttons = [{"label": "Download", "url": "https://github.com/unofficialdxnny/RatEscape/releases/"}, {"label": "Source Code", "url": "https://github.com/unofficialdxnny/RatEscape"}])
pygame.init()

while True:
    width,height = 1000,500
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption('RatEscape')
    pygame.display.set_icon(pygame.image.load('./Assets/Logo.jpg'))
    window = pygame.display.set_mode((width,height))
    bg_img = pygame.image.load('./Assets/Background.jpg')
    bg_img = pygame.transform.scale(bg_img,(width,height))
    done = False
    while not done:
        window.blit(bg_img,(0,0))
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                done = True
            pygame.display.flip()
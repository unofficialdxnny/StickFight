from pypresence import Presence
from pystyle import *
import os
import time

os.system('cls')
banner = '''
    ____  _                          __   ____  ____  ______
   / __ \(_)_____________  _________/ /  / __ \/ __ \/ ____/
  / / / / / ___/ ___/ __ \/ ___/ __  /  / /_/ / /_/ / /     
 / /_/ / (__  ) /__/ /_/ / /  / /_/ /  / _, _/ ____/ /___   
/_____/_/____/\___/\____/_/   \__,_/  /_/ |_/_/    \____/   
                                                            

'''

print(Colorate.Color(Colors.yellow, f'{banner}', True))

start_time=time.time()
client_id = "1030917447408164894"  
RPC = Presence(client_id)  
RPC.connect()
RPC.update(large_image="logo", large_text="game_name", state="By unofficialdxnny", details="Main Menu", start=start_time, buttons = [{"label": "Download", "url": "https://github.com/unofficialdxnny/Game-Project/releases/"}, {"label": "Repository", "url": "https://github.com/unofficialdxnny/Game-Project"}])

while True:
    time.sleep(15)
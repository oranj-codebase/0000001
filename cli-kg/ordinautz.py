import pyfiglet as pf
from termcolor import colored

text1 = 'Ordinautz'
text2 = 'prepare to enter !orbit'

def ordinautz():
    # Use termcolor's colored function to set the color
    print(colored(pf.figlet_format(text1, font='slant'), 'yellow'))
    print(pf.figlet_format(text2, font='slant'))
    
ordinautz()

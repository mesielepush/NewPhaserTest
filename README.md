# Fantastic Phaser RPG game
 This is a short RPG game written in JS with the Phaser3 module.
![photo flexing the game](https://i.imgur.com/5Y3137L.png)  
  
  It was made to test the capabilities of the module, which are ok. However, I'm pretty sure I just scratch the surface. The module it's very big and there are not too many users out there, so it's a little slower to learn than popular engines likes Godot or Unity.

## History of this case.

Since I was new at Phaser 3, the design of the game was pointing more to the sense that RPG games have of developing a story. I was pushing for the sensation of mystery and discovery of those types of games. However this project was made in a week so again, same as with exploring the Phaser documentation, the story and the player capabilities are merely superficial, but they were made with love (• ◡•).


## Play instructions.

Except for the last battle that uses the mouse, every other part is played with the classic 'W,A,S,D' pc keys. After the initial display, you have to solve two puzzles, each one in a main room, after that you get to the boss battle, no spoilers so no tips. 


## Installation  
  To install just clone the repository. Open the directory and run  ```yarn install``` into the console. And then: ```yarn build ```.  
  Now, Phaser 3 requires a server so you can play the game, if you have VsCode you can open the index.html with LiveServer and that will be all. If you don't use VsCode you can run this simple python script on the repository folder:  
 
 ```
import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
```

And open the game by going to``` http://localhost:8080/``` on your favorite browser, although I don't recommend InternetExplorer, that should not be your favorite browser.

## Acknowledgements:
#### Images:
All the images and sprites were taken from different sites, and although some 
times they are modified some times they are not.
#### Music:
 
The boss battle theme, is a classic battle theme from ninja gaiden and was composed by [Keiji Yamagishi](https://bit.ly/2OMxW2Z).  
The other two songs, the opening and the closing themes were composed by myself and you can use them under the MIT license. Which means if you do please make the reference to this repo.

## Try it live:
[Link to live deployment](https://5f179f28444ec1f7f61ea158--objective-nobel-a8f862.netlify.app/)
## Issues
[Issues page](https://github.com/mesielepush/NewPhaserTest/issues)  

## License
[MIT license](https://en.wikipedia.org/wiki/MIT_License)

Jonathan Marín - [Github](https://github.com/mesielepush)


<p align="center" style="display: flex; justify-content: center; align-items: center;">
    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mesielepush@gmail.com">
      mesielepush@gmail.com
    </a> &nbsp; |
    <a target="_blank" href="https://github.com/mesielepush?tab=repositories">
       Portfolio
    </a> &nbsp; |
    <a target="_blank" href="https://www.linkedin.com/in/jonathan-nava-mar%C3%ADn-94659318b/">
      LinkedIn
    </a> &nbsp; |
    <a target="_blank" href="">
      Twitter
    </a>
</p>
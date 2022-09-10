var start=1
var play=2
var end=0
var gamestate = start

var  genos,genosrun , genospunch,genosincrinate,genosjump,genosdefeat,genosstand,genosfire,genoswallpaper
var dsk,gs,melzaguard,mq,vaccineman
var bg1,bg2,bg3,invisibleground
var blast,fire


var score

function preload(){
 genosrun=loadAnimation("genos running.png","genos running 2.png")
 genosdefeat=loadAnimation("genos defeat.png")
 genosfire=loadAnimation("genos fire1.png","genos fire 2.png","genos fire 3.png")
 genosincrinate=loadAnimation("genos incrinate 1.png","genos incrinate 2.png","genos incrinate 3.png")
 genosjump=loadAnimation("genos jump 1.png","genos jump 2.png","genos jump 3.png")
 genospunch=loadAnimation("genos punches 1.png","genos punches 2.png","genos punches 4.png")
 bg1=loadAnimation("bg1.png")
 bg2=loadImage("bg2.png")
 bg3=loadImage("bg3.png")
 blast=loadAnimation("blast 1.png","blast2.png","blast 3.png","blast4.png")
dsk=loadImage("deep sea king.png")
fire=loadImage("fire.png")
gs=loadImage("gold sperm.png")
melzaguard=loadImage("melzaguard.png")
mq=loadImage("mosquito queen.png")
vaccineman=loadImage("vaccine man.png")
genos=loadAnimation("genos.png")
genoswallpaper=loadAnimation("genos wallpaper.png")
}

function setup() {
   
   
 createCanvas(680,240)
 var message="this is a message"
 console.log(message)
  back=createSprite(340,120,340,120)
 back.addAnimation("bg1",bg1)
 genos1=createSprite(50,280,20,50)
 genos1.addAnimation("genos",genos)
 genos1.addAnimation("genosjump",genosjump)
 genos1.addAnimation("run",genosrun)
 genos1.addAnimation("punch",genospunch)
 genos1.addAnimation("genosfire",genosfire)
 genos1.addAnimation("incrinate",genosincrinate)

//  genos1.depth=back.depth
//  genos1.depth=genos1.depth+1
 genoswp=createSprite(300,150)
 genoswp.scale=0.7
genoswp.addAnimation("genosw",genoswallpaper)
 
invisibleground=createSprite(50,480,190,5)
invisibleground.visible=false


}

function draw() {
    
    
    background(180)
     if(gamestate===start){
        fill("red")
        text("Genos(Demon Cyborg)is a cyborg who fights for justice,Help him to finish all the monsters and protect the city",50,20)
        text("Press SPACE to Jump",50,100)
        text("Press RIGHT and LEFT to Move",50,120)
        text("Press ENTER to Fire",50,140)
        text("Press SHIFT to Machine gun blows",50,160)
        text("Press CTRL to Incrinate",50,180)
        text("press S to Start",50,200)
        
     genos1.visible=false
     genoswp.visible=true
     back.visible=false
      
        if(keyDown("s")){
            gamestate=play
        }
     }
    
    if(gamestate===play){
        genoswp.visible=false
        genos1.visible=true
        back.visible=true
      
        if(keyDown("space")){
        genos1.velocityY=-12
        genos1.changeAnimation("genosjump",genosjump);
        }
       
        genos1.velocityY = genos1.velocityY + 0.8
        if(keyDown("Right")){
           
        genos1.changeAnimation("run",genosrun)
        genos1.velocityX=5
        
        }
        if(keyDown("left")){
            genos1.changeAnimation("run",genosrun)
            genos1.velocityX=-5
            
        }

        if(keyDown("shift")){
            genos1.changeAnimation("punch",genospunch)
        }

        if(keyDown("enter")){
            genos1.changeAnimation("genosfire",genosfire)
        }

        if(keyDown("ctrl")){
         genos1.changeAnimation("incrinate",genosincrinate)

        }
        if(keyWentUp("space")){
            genos1.changeAnimation("genos",genos)
        
                   }
        
           
                
                   if(keyWentUp("right")){
                       genos1.changeAnimation("genos",genos)
                       genos1.velocityX=0
                   }
                   if(keyWentUp("left")){
                    genos1.changeAnimation("genos",genos)
                    genos1.velocityX=0
                   }
                   if(keyWentUp("enter")){
                       genos1.changeAnimation("genos",genos)
                   }
                   if(keyWentUp("shift")){
                       genos1.changeAnimation("genos",genos)
                   }
                 if(keyWentUp("ctrl")){
                    genos1.changeAnimation("genos",genos)
                 }
                
           
      }    
    

       

    genos1.collide(invisibleground)
    edges= createEdgeSprites();
    genos1 .collide(edges);
 drawSprites()
}
    

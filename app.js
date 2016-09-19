
var yellow_circle, white_circle; //these are global variables

function preload() {
  yellow_circle = loadImage("./yellow_circle.png");
  white_circle = loadImage("./white_circle.png");
}

function setup() {
  canvas_context=createCanvas(700,700);
  background(128,0,128,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)
  //
  // for(var counter=0;counter<7;counter=counter+1){
  //   if(counter%2==0){
  //     image(mr_dragon,counter*100,0,100,100);
  //   }
  //   else{
  //     image(lazy_dragon,counter*100,0,100,100);
  //   }
  //
  // }

    for(var x=0;x<13;x++){
      for(var y=0;y<8;y++){
        image(yellow_circle, x*50, y*100,100,150);
        console.log("x:"+x+" y:"+y);
      }
    }

    for(var x=0;x<8;x++){
      for(var y=0;y<8;y++){
        image(white_circle, x*100, y*100,75,75);
        console.log("x:"+x+" y:"+y)
      }
    }


  // save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save

}

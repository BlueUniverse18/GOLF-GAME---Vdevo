

let btn1
let btn2


function preload() {

}

function setup() {
  createCanvas(1300, 675);

  btn1=createButton('PLAY')
  btn1.position(490,200)
  btn1.style("font-size","50px")
  btn1.style("background","skyblue")
  btn1.style("padding-left","70px")
  btn1.style("padding-right","70px")
  btn1.mouseOver(()=>{btn1.style("background","lightblue")})
  btn1.mouseOut(()=>{btn1.style("background","skyblue")})
  btn2=createButton('PRACTICE')
  btn2.position(490,300)
  btn2.style("font-size","50px")
  btn2.style("background","skyblue")
  btn2.mouseOver(()=>{btn2.style("background","lightblue")})
  btn2.mouseOut(()=>{btn2.style("background","skyblue")})

 
}

function draw() {
  background("yellow");
  text("mouse X :"+mouseX+" mouse Y : "+mouseY , mouseX , mouseY)
  fill(0,204,0)
 rect(0,500,1300,175)
 fill("white")
 ellipse(650,550,30,30)
 fill("black")
 ellipse(950,571,30,30)
 rect(939.760,220,20,350)
 fill("red")
 triangle(890,160,960,220,880,215)

 
 
 
}

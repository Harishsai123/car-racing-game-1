canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 120;
rover_height = 70;
rover2_width = 120;
rover2_height = 70;
background_imagee = "racing.jpg";

rover_imagee = "car1.png";
rover2_imagee = "car1.png";

rover_x = 10;
rover2_x = 10;
rover_y = 10;
rover2_y = 100;

function add() {
    background_imageeTag = new Image();
    background_imageeTag.onload = uploadBacckground;
    background_imageeTag.src = background_imagee;

    rover_imageeTag = new Image();
    rover_imageeTag.onload = uploadroveer;
    rover_imageeTag.src = rover_imagee;

    rover2_imageeTag = new Image();
    rover2_imageeTag.onload = uploadrover2;
    rover2_imageeTag.src = rover2_imagee;
}

function uploadBacckground() {
    ctx.drawImage(background_imageeTag,0,0,canvas.width,canvas.height);
} 

function uploadroveer() {
    ctx.drawImage(rover_imageeTag,rover_x,rover_y,rover_width,rover_height);
}

function uploadrover2(){
    ctx.drawImage(rover2_imageeTag,rover2_x,rover2_y,rover2_width,rover2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == '38') {
        UP();
        console.log("UP key was pressed");
    }

    if(keypressed == '40') {
        DOWN();
        console.log("DOWN key was pressed");
    }

    if(keypressed == '37') {
        LEFT();
        console.log("LEFT key was pressed");
    }

    if(keypressed == '39'){
        RIGHT();
        console.log("RIGHT key was pressed");
    }

    
    if(keypressed == '87') {
        w();
        console.log("UP key was pressed");
    }

    if(keypressed == '83') {
        s();
        console.log("DOWN key was pressed");
    }

    if(keypressed == '65') {
        a();
        console.log("LEFT key was pressed");
    }

    if(keypressed == '68'){
        d();
        console.log("RIGHT key was pressed");
    }
    
}

function UP() {
    if(rover_y > 0){
      rover_y = rover_y - 30;
      console.log("When UP is pressed x=" + rover_x + " ,y=" + rover_y);
      uploadBacckground();
      uploadroveer();
      uploadrover2();
    }
}

function DOWN() {
    if( rover_y < 510){
     rover_y = rover_y + 30;
     console.log("When DOWN is pressed x=" + rover_x + " ,y=" + rover_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}


function LEFT() {
    if( rover_x > 0){
     rover_x = rover_x - 10;
     console.log("When LEFT is pressed x=" + rover_x + " ,y=" + rover_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}



function RIGHT() {
    if( rover_x < 700){
     rover_x = rover_x + 10;
     console.log("When RIGHT is pressed x=" + rover_x + " ,y=" + rover_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}
//pasted area you NOOOOOB!  
function w() {
    if(rover2_y > 0){
      rover2_y = rover2_y - 10;
      console.log("When UP is pressed x=" + rover2_x + " ,y=" + rover2_y);
      uploadBacckground();
      uploadroveer();
      uploadrover2();
    }
}

function s() {
    if( rover2_y < 510){
     rover2_y = rover2_y + 30;
     console.log("When DOWN is pressed x=" + rover2_x + " ,y=" + rover2_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}


function a() {
    if( rover2_x > 0){
     rover2_x = rover2_x - 10;
     console.log("When LEFT is pressed x=" + rover2_x + " ,y=" + rover2_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}



function d() {
    if( rover2_x < 700){
     rover2_x = rover2_x + 10;
     console.log("When RIGHT is pressed x=" + rover2_x + " ,y=" + rover2_y);
     uploadBacckground();
     uploadroveer();
     uploadrover2();
    }
}
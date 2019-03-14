const sketch02 = (p:any) => {    
    p.setup = () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
    }

    p.draw = () =>{
        if (p.mouseIsPressed) {
            p.fill(0);
          } else {
            p.fill(255);
          }
          p.rect(p.width/2-1, p.height/2-1, p.width/2, p.height/2)
          p.ellipse(p.mouseX, p.mouseY, 80, 80);
    }
}


export default sketch02
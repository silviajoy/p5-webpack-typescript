/* Lezione del 14 marzo */

const sketch = (p:any) => {
    let xPos = 0
    let dc = 50
    let muoviti = false

    p.setup = () =>{
        p.createCanvas(500,500)
    }

    p.draw = () =>{
        p.background(255)
        p.ellipse(xPos-dc/2, p.height/2, dc, dc)
        if(xPos>p.width+dc) {
            xPos = 0
        } 
        
        if(muoviti) {
            xPos++
        }
    }

    p.mousePressed = () => {
        muoviti = !muoviti
    }
}


export default sketch
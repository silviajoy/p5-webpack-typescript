/* Lezione del 14 marzo */

const sketch = (p:any) => {
    let dc = 50
    let xPos = dc/2
    let forward = true

    p.setup = () =>{
        p.createCanvas(500,500)
    }

    p.draw = () =>{
        p.background(0)
        p.ellipse(xPos, p.height/2, dc, dc)
        if(xPos > p.width-dc/2) {
            forward = false
        }
        if (xPos <dc/2) {
            forward = true
        }
        if(forward) {
            xPos++
        } else {
            xPos--
        }
    }

}


export default sketch
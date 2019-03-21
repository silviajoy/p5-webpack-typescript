/* Esercizio del 14 marzo */

const sketch = (p:any) => {
    let dc = 50
    let xPos :number
    let yPos :number
    let forwardX :boolean
    let forwardY :boolean
    let speed :number

    p.setup = () =>{
        p.createCanvas(500,500)
        xPos = dc/2
        yPos = p.height/2
        speed = 1
    }

    p.draw = () =>{
        p.background(0)
        p.ellipse(xPos, yPos, dc, dc)

        if(xPos > p.width-dc/2) {
            forwardX = false
        }
        if (xPos < dc/2) {
            forwardX = true
        }
        if(yPos > p.width-dc/2) {
            forwardY = false
        }
        if (yPos < dc/2) {
            forwardY = true
        }
        
        if(forwardX) {
            xPos+=speed
        } else {
            xPos-=speed
        }
        if(forwardY) {
            yPos+=speed
        } else {
            yPos-=speed
        }
    }

    p.keyTyped = () => {
        if(!isNaN(p.key)) {
            let value = parseInt(p.key)
            if(value <= 5) {
                speed = value
            }
        }
        
    }

}


export default sketch
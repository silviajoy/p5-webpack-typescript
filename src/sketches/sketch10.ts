/* Lezione del 21 marzo */

const sketch = (p:any) => {
    let dc = 50
    let xPos :number
    let yPos :number
    let velocitaX :number
    let velocitaY :number

    p.setup = () =>{
        p.createCanvas(500,500)
        xPos = dc/2
        yPos = p.height/2
        velocitaX = 5
        velocitaY = 4
    }

    p.draw = () =>{
        p.background(255)  
        bordi()
        muovi()
        disegna()
    }

    let disegna = () => {
        p.ellipse(xPos, yPos, dc, dc)
    }

    let bordi = () => {
        if(xPos > p.width-dc/2 || xPos < dc/2) {
            velocitaX *= -1
        }
        if(yPos > p.width-dc/2 || yPos < dc/2) {
            velocitaY *= -1
        }
    }

    let muovi = () => {
        yPos += velocitaY
        xPos += velocitaX
    }

}


export default sketch
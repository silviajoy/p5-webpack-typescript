/* Lezione del 14 marzo */

const sketch = (p:any) => {
    const n = 2

    p.setup = () =>{
        p.createCanvas(window.innerWidth,window.innerHeight)
    }

    p.draw = () =>{
        const w = p.width
        const h = p.height
        const mX = p.mouseX
        const mY = p.mouseY
        const rectW = w/n
        const rectH = h/n 
        
        p.background(0)
        p.fill(255)

        if(mX<w/2) {
            if(mY<h/2) {
                p.rect(0,0,rectW, rectH)
            } else {
                p.rect(0,h/n, rectW, rectH)
            }
        } else {
            if(mY<h/2) {
                p.rect(w/n,0, rectW, rectH)
            } else {
                p.rect(w/n, h/n, rectW, rectH)
            }
        }
        
        p.stroke(255)
        p.line(w/n, 0, w/n, h)
        p.line(0, h/n, w, h/n)

    }
}


export default sketch
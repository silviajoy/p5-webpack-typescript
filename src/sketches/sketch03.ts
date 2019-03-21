const sketch = (p:any) => {    
    p.setup = () =>{
        p.createCanvas(window.innerWidth, window.innerHeight)
    }

    p.draw = () =>{
        const cx = p.random(p.width)
        const cy = p.random(p.height)
        const w = p.random(50,100)

        const r = p.random(255)
        const g = p.random(256)
        const b = p.random(256)

        p.noStroke(0)
        p.fill(r,g,b)

        p.ellipse(cx, cy, w, w)
    }
}


export default sketch
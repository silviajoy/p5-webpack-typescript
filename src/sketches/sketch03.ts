const sketch = (p:any) => {    
    p.setup = () =>{
        p.createCanvas(window.innerWidth, window.innerHeight)
    }

    p.draw = () =>{
        const cx = p.random(0, p.width+1)
        const cy = p.random(0, p.height+1)
        const w = p.random(1,100)

        const r = p.random(0,256)
        const g = p.random(0,256)
        const b = p.random(0,256)

        p.strokeWeight(0)
        p.fill(r,g,b)

        p.ellipse(cx, cy, w, w)
    }
}


export default sketch
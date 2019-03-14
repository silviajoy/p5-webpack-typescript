const sketch = (p:any) => {    
    p.setup = () =>{
        p.createCanvas(window.innerWidth, window.innerHeight);
    }

    p.draw = () =>{
        p.ellipse(50, 50, 80, 80);
    }
}


export default sketch
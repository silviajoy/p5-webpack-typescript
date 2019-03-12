import * as p5 from 'p5'

let sketch = (p) => {    
    p.setup = () =>{

    }

    p.draw = () =>{
        p.ellipse(50, 50, 80, 80);
    }
}

const P5 = new p5(sketch)
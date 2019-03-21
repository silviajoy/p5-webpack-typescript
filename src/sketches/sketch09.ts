/* Lezione del 21 marzo */

const sketch = (p:any) => {
    let x = 0;

    p.setup = () =>{
        p.createCanvas(500,500)
    }

    p.draw = () =>{
        x = sommaCinque(x)
        p.ellipse(x, p.width/2, 25)
    }

    let sommaCinque = (a :number) :number => {
        return a + 5
    }
}


export default sketch
import p5 from 'p5'

const Lines = (p5c: p5) => { 
    const p = p5c
    let point = p.createVector(p.random(p.width), p.random(p.height))
    let random = p.createVector(p.random(-0.01, 0.01), p.random(-0.01, 0.01))

    const drawLine = (val: p5.Vector) => { 
        point.add(random)
        const distance = p.dist(point.x, point.y, val.x, val.y)

        if (distance < 150) { 
            const alpha = 1 - (distance / 150.0)
            p.stroke(0, alpha * 255)
            p.line(point.x, point.y, val.x, val.y)
        }
    }

    const checkEdges = () => { 
        if (point.x > p.width) { 
        point.x = 0;
        }
        
        if (point.x < 0) { 
        point.x = p.width;
        }
        
        if (point.y > p.height) { 
        point.y = 0;
        }
        
        if (point.y < 0) { 
        point.y = p.height;
        }
    }

    return { 
        drawLine, checkEdges
    }
}

export default Lines

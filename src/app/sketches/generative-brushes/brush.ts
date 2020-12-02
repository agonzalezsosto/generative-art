import p5 from 'p5'

const Brush = (p: p5) => {
  let velocity = p.createVector(0, 0)
  const increment = 0.003
  const rad = p.random(50, 100)
  const stroke = 1
  const alpha = 10
  let position = p.createVector(p.random(p.width), p.random(p.height))
  let xOffset = p.random(p.width)
  let yOffset = p.random(p.height)
  let p1 = p.random(255)

  const move = () => {
    xOffset += increment
    yOffset += increment
    position.x = p.map(p.noise(xOffset), 0, 1, -p.width, p.width)
    position.y = p.map(p.noise(yOffset), 0, 1, -p.height, p.height)
  }

  const display = () => {
    p.push()
    p.translate(p.width / 2, p.height / 2)
    p.stroke(p1, alpha)
    p.strokeWeight(stroke)
    p.noFill()
    p.circle(position.x, position.y, rad)
    p.pop()
  }

  const margins = () => {
    if (position.x < 0 || position.x > p.width) {
      velocity.x *= -1
    }
    if (position.y < 0 || position.y > p.height) {
      velocity.y *= -1
    }
  }

  return {
    move,
    display,
    margins,
  }
}

export default Brush

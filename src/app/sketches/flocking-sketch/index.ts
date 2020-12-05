import p5 from 'p5'
import { Boid, BoidType } from './boid'

const FlockingSketch = (p: p5) => {
  let boids: BoidType[] = []
  const numBoids = 50
  let color = p.color(255)

  p.setup = () => {
    const cnv = p.createCanvas(600, 400)
    cnv.parent('container-flocking')
    p.strokeWeight(2)
    p.background(0)
    for (let i = 0; i < numBoids; i++) {
      boids.push(Boid(p))
    }
  }

  p.draw = () => {
    p.background(0)
    color = p.color(
      p.noise(p.frameCount / 100) * 255,
      p.noise(p.frameCount / 100 + 10) * 255,
      p.noise(p.frameCount / 100 + 20) * 255
    )
    for (let i = 0; i < numBoids; i++) {
      boids[i].flock(boids)
      boids[i].update()
      boids[i].show(color)
    }
  }

  p.mousePressed = () => {
    p.background(0)
    boids = []
    for (let i = 0; i < numBoids; i++) {
      boids.push(Boid(p))
    }
  }
}

export default FlockingSketch

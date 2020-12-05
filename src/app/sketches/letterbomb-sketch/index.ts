import p5 from 'p5'
import { LetterBomb, words, LetterBombType } from './letter-bomb'

const LetterBombSketch = (p: p5) => {
  let letterBombArray: LetterBombType[] = []

  p.setup = () => {
    const cnv = p.createCanvas(600, 400)
    cnv.parent('container-letterbomb')
    p.background(0)
    p.textAlign(p.CENTER)
    p.rectMode(p.CENTER)

    for (let i = 0; i < 10; i++) {
      letterBombArray.push(
        LetterBomb(
          p,
          p.random(p.width),
          p.random(0, 20),
          p.random(1, 3),
          p.int(p.random(words.length))
        )
      )
    }
  }

  p.draw = () => {
    p.background(0)
    for (let i = 0; i < 10; i++) {
      letterBombArray[i].drawBox()
      letterBombArray[i].drawText()
      letterBombArray[i].move()
    }
  }
}

export default LetterBombSketch

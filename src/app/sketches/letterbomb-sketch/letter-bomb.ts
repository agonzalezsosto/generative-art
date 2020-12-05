import p5 from 'p5'

const phrase =
  'We cannot promise that only these cities will be among those attacked, but some or all of them will be, so heed this warning and evacuate these cities immediately'

export let words: string[] = phrase.split(' ')

export type LetterBombType = {
  move: () => void
  drawBox: () => void
  drawText: () => void
}

export const LetterBomb = (
  p: p5,
  _x: number,
  _y: number,
  _s: number,
  _r: number
) => {
  let xPos = _x
  let yPos = _y
  let speed = _s
  let randomArrayElement = _r

  const move = () => {
    yPos = yPos + speed
    if (yPos > p.height) {
      yPos = 0
      randomArrayElement = p.int(p.random(words.length))
    }
  }

  const drawBox = () => {
    const padding = 5
    const startTextSize = 20
    const textGrowthFactor = yPos / 10
    const theTextSize = startTextSize + textGrowthFactor
    p.textSize(theTextSize)

    if (words[randomArrayElement].length > 7) {
      p.fill(255, 0, 0, 200)
    } else {
      p.fill(255, 200)
    }
    p.rect(
      xPos,
      yPos - theTextSize / 2,
      p.textWidth(words[randomArrayElement]),
      theTextSize + padding
    )
    p.stroke(255)
    const xPosTopLeftOfBox = xPos - p.textWidth(words[randomArrayElement]) / 2
    const XPosTopRightOfBox = xPos + p.textWidth(words[randomArrayElement]) / 2
    const xPosMiddleOfBox = xPos
    p.strokeWeight(2)
    p.line(
      xPosTopLeftOfBox,
      yPos - theTextSize,
      xPosMiddleOfBox,
      yPos - theTextSize * 2
    )
    p.line(
      XPosTopRightOfBox,
      yPos - theTextSize,
      xPosMiddleOfBox,
      yPos - theTextSize * 2
    )
    p.ellipse(
      xPosMiddleOfBox,
      yPos - theTextSize * 2,
      theTextSize / 8,
      theTextSize / 8
    )
  }

  const drawText = () => {
    p.strokeWeight(1)
    p.fill(0)
    p.text(words[randomArrayElement], xPos, yPos)
  }

  return { move, drawBox, drawText }
}

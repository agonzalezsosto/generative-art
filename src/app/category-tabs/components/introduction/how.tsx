import React from 'react'
import { Body } from '../text-components'

const How: React.FC = () => (
  <div>
    <Body>
      This website was developed using the{' '}
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        rel="noreferrer"
      >
        TypeScript
      </a>{' '}
      language, a strict syntactical superset of{' '}
      <a
        href="https://en.wikipedia.org/wiki/JavaScript"
        target="_blank"
        rel="noreferrer"
      >
        JavaScript
      </a>
      , which adds types and other features to the core JavaScript language.
    </Body>
    <Body>
      The UI and navigation were developed using{' '}
      <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        React.js
      </a>{' '}
      and other accompanying libraries.
    </Body>
    <Body>
      The animations are presented using{' '}
      <a href="https://p5js.org/" target="_blank" rel="noreferrer">
        p5.js
      </a>
      , a JavaScript (and in this case, TypeScript), port of{' '}
      <a href="https://processing.org/" target="_blank" rel="noreferrer">
        Processing
      </a>
      .
    </Body>
    <Body>
      The website is hosted on{' '}
      <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
        Heroku
      </a>
      .
    </Body>
    <Body>
      The repository for this website can be found on{' '}
      <a
        href="https://github.com/agonzalezsosto/generative-art"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
      , and you’re invited to explore the repository and its code.
    </Body>
  </div>
)

export default How

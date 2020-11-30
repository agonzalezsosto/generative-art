import React from 'react'
import { TextContainer, Title, Body, Subtitle, Tab } from './text-components'

const subtitles = ['Concept', 'Why a website?', 'How does this work?']

const Concept: React.FC = () => (
  <div>
    {' '}
    <Body>
      What makes artists interested in generative art? What sort of outcome are
      they expecting by yielding control to external systems? How does the
      artist reconcile their artistic will with the deterministic outcome of a
      programmed system? What is revealed about art itself by working with
      generative art?
    </Body>
    <Body>
      To pave the way for our explorations, we have decided to fragment our
      research into different categories, each of which is accessible on the
      navigation bar on the top of this website.
    </Body>
    <Body>
      In the{' '}
      <b>
        <em>History </em>
      </b>{' '}
      tab, we explore the evolution of generative processes in the creation of
      art pieces. This exploration is aimed at contextualizing the development
      of the field, and it is also an exercise in de-coupling the idea of
      generative processes from computational processes.
    </Body>
    <Body>
      In the{' '}
      <b>
        <em>Random</em>
      </b>{' '}
      tab, we explore different usages of randomness and noise in the generation
      of artistic pieces, and how the usage of unexpected values can cause
      intriguing results.
    </Body>
    <Body>
      In the{' '}
      <b>
        <em>Emergence</em>
      </b>{' '}
      tab, we explore the notion of emergence, in other words, the creation of
      complex behaviors and entities born out of the interaction of simpler
      entities within a system.
    </Body>
    <Body>
      In the
      <b>
        <em>Botanical Systems</em>
      </b>
      tab, we explore how recursion, fractals, L-Systems, and biological systems
      at large can influence the development of algorithms applied to visual
      arts. We also explore the implications of deriving algorithms from
      biological systems.
    </Body>
    <Body>
      Finally, in the{'        '}
      <b>
        <em>Conclusion</em>
      </b>
      {'         '}
      tab, we sum up the observations made along the path taken on the website.
    </Body>
  </div>
)

const Why: React.FC = () => (
  <div>
    <Body>
      We live in a time where the web presents an almost universal platform for
      devices of varying characteristics to engage in a somewhat similar
      experience. This presents an interesting opportunity to the contemporary
      artist. These modern technologies can be leveraged in order to provide an
      artistic experience to audiences throughout the world, providing fertile
      ground for artistic and theoretical exploration.
    </Body>
    <Body>
      It’s important to note that websites not only handle the issue of delivery
      and compatibility, as they’re also an interactive means of distribution.
      This means that audiences can continuously engage with the material that
      is being sent to them.
    </Body>
    <Body>
      It is our intention that by providing real-time renderings of generative
      animations, audiences will be able to see how these pieces develop by
      controlling parameters and viewing variations of random processes. It
      seems that the combination of text and real-time renderings of art pieces,
      in combination with static images and other conventional forms of
      multimedia as well, the ideas of generative art can be communicated with
      clarity and transparency.
    </Body>
  </div>
)

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

const Introduction: React.FC = () => {
  const [currentTab, setCurrentTab] = React.useState<number>(0)

  let bod
  switch (currentTab) {
    case 0:
      bod = <Concept />
      break
    case 1:
      bod = <Why />
      break
    case 2:
      bod = <How />
      break
    default:
      break
  }

  return (
    <TextContainer>
      <Title>Introduction</Title>
      <Subtitle>Hello, generative art!</Subtitle>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {subtitles.map((item, index) => (
          <Tab
            isActive={index === currentTab}
            onClick={() => setCurrentTab(index)}
          >
            {item}
          </Tab>
        ))}
      </div>
      {bod}
    </TextContainer>
  )
}

export default Introduction

/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {
  constructor() {
    super()
    this.state = { color: 'red' }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img crossOrigin id="groundTexture" src="img/floor.jpg" />
          <img crossOrigin id="skyTexture" src="img/sky.jpg" />
          <img id="groundTexture2" src="https://ucarecdn.com/c88dad4e-16ea-4ead-94e3-6026cbd159ec/"/>
        </a-assets>

        <Entity id="groundpattern"
          geometry={{ primitive:'plane', height:'10000',width:'10000'}}
          rotation="-90 0 0"
          material={{ transparent: 'true', repeat:'10000 10000', metalness:'0.6', roughness:'0.4', src:'#groundTexture2'}}/>


        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          width="2048"
        />
        <Entity particle-system={{ preset: 'snow', particleCount: 2000 }} />
        <Entity
          text={{ value: 'Hello, A-Frame Preact!', align: 'center' }}
          position={{ x: 0, y: 2, z: -1 }}
        />

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }}
          />
        </Entity>
      </Scene>
    )
  }
}

export default Main

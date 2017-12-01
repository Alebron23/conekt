import React, { Component } from 'react'
import Map from './components/Map'
import './app.css'


class App extends Component {

  render() {

    return (
      <div className="map">
          <h1>Map Demo</h1>
          <div style={{width:50+'%', height: 600, background:'white'}}>
            {/** This replicates the higher order compoent like <GettingStartedGoogleMap> in the documentation on the google-maps-react github*/}
              <Map                                                                                  
                  center            = {{lat: 34.9494444, lng: -81.9322222}}
                  zoom              = {10}
                  containerElement  = {<div style={{height:100+'%'}} />}
                  mapElement        = {<div style={{height:100+'%'}} />}
              />
          </div>
      </div>
    )
  }
}

export default App;

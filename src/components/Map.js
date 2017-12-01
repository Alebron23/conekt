import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps' //the curly braces is how you import sub modules from the library. These are literal visual components. withGoogleMap is a higher order component. That is because it is being employed as function. But the function returns another component definition. Which then gets mounted later down the line. What happens is the function takes a component as an input, doing some stuff to it, and then returning another component then that component get leveraged and mounted after. and that is a higher order component.

class Map extends Component {

    constructor(props){                                                  //Here we are maintaining a reference to the map inside the component. So when the map is mounted we can grab a reference to it.

        super()                                                         //Don't forget that you have to call this to be able to access state. Class components should always call the base constructor with props. But only reason to pass it to super is to access this.props within the constructor, otherwise you can access it with just props since it was passed into the constructor as a parameter.  Component receives props by a different way that by constructor parameter.

        this.state = {                                                  //State is reserved for data that changes over time. For data that doesn't change, use props. 
            map: null
        }
    }

    mapMoved() {
        console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
    }

    zoomChanged() {
        console.log('zoomChanged: ' + this.state.map.getZoom())
    }

    mapLoaded(map) {

        if(this.state.map != null)
            return

        this.setState({
            map: map
        })
    }

    render() {

        const markers = this.props.markers || []

        return (
            <GoogleMap                                                //The GoogleMap component cannot stand on its own so you have to leverage the higher order component by calling it at the bottom and that imitates the higher order component functionality. The higher order component requires two properties when you call the <Map /> in the app.js file. They are containerElement={} and mapElement={}
                ref             = {this.mapLoaded.bind(this)}
                onZoomChanged   = {this.zoomChanged.bind(this)}
                onDragEnd       = {this.mapMoved.bind(this)}
                defaultZoom     = {this.props.zoom}
                defaultCenter   = {this.props.center}
            >
                {
                    markers.map((marker, index) => (
                        <Marker {...marker} />
                    ))
                }
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)
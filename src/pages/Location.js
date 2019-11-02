import React, { Component } from 'react';
import StoryLogo from '../images/storyinnlogo.png'
import Story1 from '../images/StoryInn1.jpg'
import Story2 from '../images/StoryInn2.jpg'
import Story3 from '../images/StoryInn3.jpg'
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';




import MyMarker from './MyMarker';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 39.099094, lng: -86.214057 }}
  >
    {props.places.map((place,itr)=>{
        place.locationUrl = "http://www.google.com/maps?q=" + place.address
        return (
            <MyMarker place={place} key={itr} />
        )
    })}
  </GoogleMap>
))



class Location extends Component {

        render() {

            const places = [
                { lat: 39.099205, lng: -86.214153, name: 'Story Inn', description: "Location of Ceremony and Reception", address: "Story Inn, Indiana 135, Nashville, IN" },
                { lat: 39.207222, lng: -86.251111, name: 'Nashville', description: "Location of largest nearby town and reserved rooms", address: "Nashville, IN" },
                {lat: 39.200600, lng: -86.240073, name: "Quality Inn Nashville", description: "Location of reserved rooms", address: "51 Chestnut Street West, Nashville, IN, 47448"}
            ]
            return (
                <div className='location'>
                    <div>
                        <img src={StoryLogo} alt="Story Inn Logo" />
                    </div>
                    <div className='location_panel location_panel_left'>
                        <img src={Story1} alt="Story Inn - front of cafe" />
                            <p>This area of the state now appropriately called Indiana was opened to European settlement on September 30, 1809, upon the consummation of a treaty between Governor William Henry Harrison and the Miami Indians. The so-called “Ten O’clock Treaty” opened three million acres to settlement, the boundary being a line running from Raccoon Creek on the Wabash River near Montezuma to Seymour, marked by a shadow cast at 10:00 a.m. each September 30. That line passed right through the heart of what would become the town of Story. Today, that line is denoted by a carved limestone monument in the center of Story’s village green.</p>
                    </div>
                    <div className='location_panel location_panel_right'>
                        <p><img src={Story2} alt="Story Inn - back view of the barn" />
                            The village of Story itself was founded in 1851, with the grant of a land patent from President Millard Fillmore to Dr. George Story. This original land patent is on display at the Story Inn®. Dr. Story was a medical doctor who hailed from a clan of timber harvesters in southern Ohio. He and his progeny built many of the structures which distinguish this town today, from the then-ample supply of domestic hardwoods. His home managed to survive the forces of entropy, and now serves as an overnight accommodation.</p>
                    </div>
                    <div className='location_panel location_panel_left'>
                        <div>
                            <img src={Story3} alt="Story Inn - front view of the barn" />
                        </div>
                        <div>
                            <p>Story soon became the largest settlement in the area. In its heyday (1880-1929) the village supported two general stores, a nondenominational church, a one-room schoolhouse, a grain mill, a sawmill, a slaughterhouse, a blacksmith’s forge and a post office.
    
Story never recovered from the Great Depression (1929-1933), as families abandoned farms in search of work elsewhere. Brown County lost half of its population between 1930 and 1940. This exodus of people created an opportunity for the State of Indiana to begin the purchase of 16,000 acres of wooded hills that are now the Brown County State Park, the largest in the state.  As years passed, thousands of additional acres were acquired to form the Hoosier National Forest, Yellowwood State Forest and the Lake Monroe impoundment lands.  These vast tracts of public lands now surround Story on three sides.</p>
                        </div>
                    
                    </div>
                    <MyMapComponent
                        isMarkerShown
                        places = {places}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi_HztGpsI_8d7CGSJan4qsihVeaBdJJ8&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%`, borderRadius: `10px` }} />}
                        
                    />



                    {/* <Map isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi_HztGpsI_8d7CGSJan4qsihVeaBdJJ8&v=3.exp&libraries=geometry,drawing,places"

                        // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAi_HztGpsI_8d7CGSJan4qsihVeaBdJJ8"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    /> */}


                    {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMB5xr2XTB2WGlmypCK0XzK37Ut6apcp4"></script> */}

                    {/* AIzaSyAMB5xr2XTB2WGlmypCK0XzK37Ut6apcp4 */}
                    {/* <Map center={mapCenter} zoom={10} style={{ height: "100vh" }} >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                </Map> */}


                    {/* <Map google={this.props.google} /> */}

                    {/* <LeafletMap
                        center={[39.099094, -86.214057]}
                        zoom={10}
                        maxZoom={15}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                    >
                        <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                        {places.map((item)=> 
                            <MyMarker location={item} />
                            )} */}




                    {/* <MyMarker location={places[0]} /> */}
                    {/* <Marker position={[places[0].lat, places[0].lon]}>
                            <Popup>
                                <a href="https://www.google.com/maps/@39.099094,-86.214057,15z?hl=en&authuser=0" target='_blank' >Story Inn, IN</a>
                            </Popup>
                        </Marker> */}





                    {/* </LeafletMap> */}




                </div >
            );
        }
    }
export default Location;
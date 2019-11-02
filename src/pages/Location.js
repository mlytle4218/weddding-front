import React, { Component } from 'react';
import StoryLogo from '../images/storyinnlogo.png'
import Story1 from '../images/StoryInn1.jpg'
import Story2 from '../images/StoryInn2.jpg'
import Story3 from '../images/StoryInn3.jpg'
import mapIcon from "../images/map_icon.png"


class Location extends Component {
    openDirections = () =>{
        window.location.href = " http://www.google.com/maps?q=Story Inn, Indiana 135, Nashville, IN"
    }

        render() {
            return (
                <div className='location'>
                    <div>
                        <img src={StoryLogo} alt="Story Inn Logo" />
                        <img className="map_icon" src={mapIcon} alt='Open map' onClick={this.openDirections}/>
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
                </div >
            );
        }
    }
export default Location;
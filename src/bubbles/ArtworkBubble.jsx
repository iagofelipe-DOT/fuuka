import React, {useState} from "react"
import FeaturedArtworkBubble from './FeaturedArtworkBubbles.jsx'
import AboutMeBubble from "./AboutMeBubble.jsx"

function Artwork(){
    
    
    return( 
        <div className='artwork'>
            <h1 className = 'title'>Artworks:</h1>
            {/*inserir for loop dps*/}
            <AboutMeBubble/>
            <FeaturedArtworkBubble/>
            <FeaturedArtworkBubble/>
            <FeaturedArtworkBubble/>
        </div>
    )
}

export default Artwork
import '../index.css'
import Artwork from './ArtworkBubble.jsx'
import AnonBubble from './AnonBubble.jsx' 

function LowerBubbles() {

  return (
     <span className='master'>
        <Artwork/>
        
        <AnonBubble/>
     </span>
  )
}

export default LowerBubbles
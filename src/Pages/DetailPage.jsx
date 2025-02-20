import { useContext } from "react"
import { Move } from "../Context/move"
import Headerp from "../components/headerp"
import Episode from "../components/Episode"
import Next from "../components/next"
import Footertwo from "../components/Footertwo"

function DetailPage() {

    const { selectMovie } = useContext(Move)
    console.log(selectMovie)
  return (
    <div>
      <Headerp backgroundImage={selectMovie.backdrop_path}>

      </Headerp>
      <Episode> 

      </Episode>
      <Next>

      </Next>
      <Footertwo>
        
      </Footertwo>
    </div>
  )
}

export default DetailPage

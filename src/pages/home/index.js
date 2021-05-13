import MySlick from "../../global/Slick"
import Collection1 from "./collection1"

const Home = () => {
  return (
    <div id='home'>
      <div className='home-container'>
        <div className='container'>
          <Collection1 />
        </div>
      </div>
    </div>
  )
}

export default Home
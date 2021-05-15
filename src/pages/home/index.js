import Collection1 from "./collection1"
import Collection2 from "./collection2"
import Collection3 from "./collection3"


const Home = () => {
  return (
    <div id='home'>
      <div className='home-container'>
        <div className='container'>
          <Collection1 />
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8'>
              <Collection2 />
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <Collection3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
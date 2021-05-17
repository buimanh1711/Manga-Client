import { Link } from 'react-router-dom'
import getImage from '../../utils/getImage'

const Collection2 = (props) => {
  const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <>
      <div id='latest'>
        <h1 className='latest-title'>
          Truyện mới cập nhật
        </h1>
        <div className='posts-container'>

          <div className='row'>
            {/* next 3 */}
            {
              arr &&
              arr.map((item, index) => {
                return (
                  <div className='col-6 col-sm-6 col-md-4 col-lg-6 col-xl-3'>
                    <div className='one-content'>
                      <div className='one-text'>
                        <div className='text-title'>
                          Tên truyện nè
                       </div>
                        <div className='text-subs'>
                          <div className='text-category'>
                            Thể loại 1
                          </div>
                          <div className='text-category'>
                            Thể loại 2
                          </div>
                          <div className='text-category'>
                            Thể loại 3
                          </div>
                          <div className='text-category'>
                            Thể loại 4
                          </div>
                          <p>
                          Ooyama-kun học sinh cá biệt trong lớp Akutsu-san, vì một vài lý do ...
                          </p>
                       </div>
                      </div>

                      <div className='one-category'>
                        Chương 100
                        </div>
                      <div className='one-hot'>
                        HOT
                        </div>
                      <div className='one-thumb'>
                        <Link to={`posts`}>
                          <img
                            src='https://images8.intercomics.club/comics/0a/cf/0acff57129b3674f5dbf762f420714a2.jpg'
                            alt='img'
                          />
                        </Link>
                      </div>
                      <div className='one-infor'>

                        <Link to={`posts`} className='one-title'>
                          Hasagi nè
                        </Link>

                        <span className='one-desc'>
                          Chương 100
                        </span>


                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
          <Link to='/' className='latest-seemore'>See more...</Link>
        </div>
      </div>
    </>
  )
}

export default Collection2
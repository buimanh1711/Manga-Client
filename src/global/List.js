import { Link } from "react-router-dom"

const StoriesList = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div id='stories-list'>
      <div className='container'>
        <div className='stories-list-container'>
          <div className='row custom-gutter'>
            {
              arr.map(item => (
                <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 custom-gutter'>
                  <div className='item-container'>
                    <span className='category'>Truyện tranh</span>
                    <div className='thumb'>
                      <Link>
                        <img src='/images/item.png' />
                      </Link>
                    </div>
                    <div className='info'>
                      <Link>Captain America: The first Avenger</Link>
                      <p>
                        bộ phim siêu anh hùng được phát hành năm 2011 dựa trên nhân vật truyện tranh cùng tên của Marvel Comics.
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoriesList
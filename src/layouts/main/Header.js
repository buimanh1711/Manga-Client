import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const menu = useSelector(state => state.web.menu)
  const asPath = location.pathname || '/'

  const categories = [
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    },
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    },
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    },
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    },
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    },
    {
      title: 'Truyện tranh',
      path: '/truyen-tranh'
    }
  ]
  const [mbMenu, setMbMenu] = useState(false)

  return (
    <>
      <div id='main-header'>
        <div className='container'>
          <div className='header-container'>
            <div className='logo'>
              <div className='avt-wrapper'>
                <a href='/'>
                  <img src='/images/logo.png' />
                </a>
              </div>
            </div>
            <div className='search-form'>
              <form>
                <div className='search-container'>
                  <input required placeholder='Tìm kiếm truyện...' />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            {/* <div className='sign'>
              <Link to='/login'>Đăng nhập</Link>
              <Link to='/login'>Đăng ký</Link>
            </div> */}
            <div className='user'>
              <Link title='Thêm truyện mới' className='add'>
                <span></span>
                <i className="fas fa-pen-nib"></i>
              </Link>
              <div className='avt-wrapper'>
                <Link>
                  <img style={{ display: 'inline-block' }} src='/images/user_default_img.png' />
                </Link>
                <Link className='out'>
                  Đăng xuất
                </Link>
              </div>
              <span style={{marginLeft: 8, fontWeight: 'bold'}}>Bùi Văn Mạnh</span>
            </div>
          </div>
        </div>
        <div className='header-menu'>
          <div className='container'>
            <ul>
              {
                menu.map((item, index) => {
                  return (
                    <li className={asPath === item.path ? 'active' : ''} key={index}>
                      <Link to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

      <div id='main-mb-header'>
        {
          mbMenu &&
          <>
            <div className='menu-overlay'></div>
            <div className='fixed-menu'>
              <button className='switch' onClick={() => setMbMenu(false)}>
                <i className="fas fa-times-circle"></i>
              </button>
              <form>
                <div className='search-mb'>
                  <input required placeholder='Tìm kiếm truyện' />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
              <ul>
                {
                  menu.map((item, index) => (
                    <li className={item.path === asPath ? 'active' : ''} key={index}>
                      <Link to={item.path}>
                        {item.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
              <div className='user'>
                <Link>Bùi Văn Mạnh</Link>
                <Link>Đăng xuất</Link>
              </div>
              {/* <div className='sign'>
                <Link>Đăng nhập</Link>
                <Link>Đăng ký</Link>
              </div> */}
            </div>
          </>
        }
        <div className='container'>
          <div className='header-container'>
            <div className='logo'>
              <div className='avt-wrapper'>
                <a href='/'>
                  <img src='/images/logo.png' />
                </a>
              </div>
            </div>
            <div className='bars-btn'>
              <Link title='Thêm truyện mới' className='add'>
                <span></span>
                <i className="fas fa-pen-nib"></i>
              </Link>
              <button onClick={() => setMbMenu(true)}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
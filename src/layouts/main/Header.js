import { useSelector } from "react-redux"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const menu = useSelector(state => state.web.menu)
  const asPath = location.pathname || '/'

  return (
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
            <div className='search-container'>
              <input placeholder='Tìm kiếm truyện...' />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className='sign'>
            <Link to='/login'><span>Đăng nhập</span> <i className="fas fa-sign-in-alt"></i></Link>
            <Link to='/login'><span>Đăng ký</span> <i className="fas fa-user-plus"></i></Link>
          </div>
        </div>
        <div className='header-menu'>
          <ul>
            {
              menu.map((item, index) => {
                return (
                  <li className={asPath === item.path ? 'active': ''} key={index}>
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
  )
}

export default Header
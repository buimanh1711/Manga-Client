import { Link } from 'react-router-dom'
import getImage from '../../utils/getImage'

const Collection3 = (props) => {
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
    ]
    return (
        <>
            <div id='latest'>
                <h1 className='latest-title'>
                    Top truyện hot
        </h1>
                <div className='posts-container'>

                    <div className='row'>
                        {/* next 3 */}
                        {
                            arr &&
                            arr.map((item, index) => {
                                return (
                                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <div className='border mb-2 d-flex justify-content-between align-items-center'>
                                            <Link to='/'>
                                                <img src="http://st.imageinstant.net/data/comics/86/van-co-de-nhat-te.jpg" className="img-thumbnail" height='75px' width='75px' alt="" />
                                            </Link>
                                            <div className='m-1'>
                                                <Link to='/'>

                                                    Kimetsu No Yaiba Yasuo Huyết Nguyệt
                                                </Link>
                                                <p className='small'>

                                                    <span>15/05/2021 - Chương 999</span>
                                                </p>
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

export default Collection3
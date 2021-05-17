import { Link } from 'react-router-dom'

const Collection1 = (props) => {

    const arr = [
        {},
        {},
        {},
        {},
        {},
    ]

    return <>
        <div id='collection1'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    {
                        arr && arr.slice(0, 2).map((item, index) => {
                            return (
                                <div className='item-container'>
                                    <div className='item-category'>
                                        <Link to={`category/`}>
                                            Tình cảm
                                        </Link>
                                    </div>
                                    <Link to={`posts/`}>
                                        <img
                                            className='img-fluid'
                                            src='https://i.pinimg.com/564x/6d/8d/5b/6d8d5be6573f527c439903a9e8473dae.jpg'
                                            alt='img'
                                        />
                                    </Link>
                                    <div className='item-title'>
                                        <Link to={`posts/`}>
                                            Naruto là con của Boruto
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                    {
                        arr && arr.slice(2, 3).map((item, index) => {
                            return (
                                <div className='item-container'>
                                    <div className='item-category'>
                                        <Link to={`category/`}>
                                            Tình cảm
                                        </Link>
                                    </div>
                                    <Link to={`posts/`}>
                                        <img
                                            className='img-fluid'
                                            src='https://i.pinimg.com/564x/6d/8d/5b/6d8d5be6573f527c439903a9e8473dae.jpg'
                                            alt='img'
                                        />
                                    </Link>
                                    <div className='item-title'>
                                        <Link to={`posts/`}>
                                            Ngôi nhà và những linh hồn
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    {
                        arr && arr.slice(3, 5).map((item, index) => {
                            return (
                                <div className='item-container'>
                                    <div className='item-category'>
                                        <Link to={`category/`}>
                                            Tình cảm
                                        </Link>
                                    </div>
                                    <Link to={`posts/`}>
                                        <img
                                            className='img-fluid'
                                            src='https://i.pinimg.com/564x/6d/8d/5b/6d8d5be6573f527c439903a9e8473dae.jpg'
                                            alt='img'
                                        />
                                    </Link>
                                    <div className='item-title'>
                                        <Link to={`posts/`}>
                                            Naruto là con của Boruto
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
}

export default Collection1
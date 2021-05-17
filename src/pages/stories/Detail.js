import { Link } from 'react-router-dom'


const Detail = () => {
    let love = false;
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
        <div className='container'>
            <div id='detail-wrapper'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className='detail-img'>
                            <img
                                className="img-fluid"
                                src="https://i.pinimg.com/564x/6d/8d/5b/6d8d5be6573f527c439903a9e8473dae.jpg"
                                alt="img"
                            />
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
                        <div className='detail-title'>
                            Chư Giới - Tận Thế Online
                        </div>
                        <div>
                            <Link to={`/category/`} className='m-2 btn btn-outline-warning'>
                                Tình cảm
                            </Link>
                            <Link to={`/category/`} className='m-2 btn btn-outline-warning'>
                                Tình cảm
                            </Link>
                            <Link to={`/category/`} className='m-2 btn btn-outline-warning'>
                                Tình cảm
                            </Link>
                            <Link to={`/category/`} className='m-2 btn btn-outline-warning'>
                                Tình cảm
                            </Link>
                            <Link to={`/category/`} className='m-2 btn btn-outline-warning'>
                                Tình cảm
                            </Link>
                        </div>
                        <p><i class="fas fa-info-circle"></i> Tình trạng: Đang cập nhật</p>
                        <p><i class="far fa-calendar-alt"></i> Ngày đăng: 16/05/2021</p>
                        <p><i class="far fa-chart-bar"></i> Thống kê: Đang cập nhật</p>
                        {
                            !love ?
                                <div className='btn btn-danger' onClick={() => love = !love}>
                                    <i className="fas fa-heart"></i> Theo dõi
                                </div>
                                :
                                <div className='btn btn-outline-danger' onClick={() => love = !love}>
                                    <i className="far fa-heart"></i> Hủy theo dõi
                                </div>
                        }
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <div className='mt-2 alert alert-primary'>
                            Trong một thành phố tràn đầy tội ác ghê tởm và bạo lực, hai cô gái làm công việc tiêu diệt những tên tội phạm không thể được giải quyết bởi cảnh sát...
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <div className='detail-box-title'>
                            Danh sách chương
                        </div>
                        <div className='detail-box'>
                            {
                                arr && arr.map((item, index) => {
                                    return (
                                        <div className='border-bottom p-2'>
                                            <div className='row'>
                                                <div className='col-md-10 col-sm-10 col-8'>
                                                    <Link to={`/category/`} className=''>
                                                        Tập {index}
                                                    </Link>
                                                </div>
                                                <div className='col-md-2 col-sm-2 col-4'>
                                                    16/05/2021
                                            </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <div className='mt-3 detail-box-title'>
                            Bình luận
                        </div>
                        <textarea class="form-control" rows="5"></textarea>
                        <button class="btn btn-lg mt-2 btn-info">
                            Bình luận
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2'>
                        <div className='comment-avatar'>
                            <img
                                src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                                class="rounded-circle"
                                alt=""
                                width="100" height="100"
                            />
                        </div>
                    </div>
                    <div className='col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10 p-3'>
                        <div class="alert alert-dark">
                            <h4 class="alert-heading">Người dùng 1</h4>
                            <hr />
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2'>
                        <div className='comment-avatar'>
                            <img
                                src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                                class="rounded-circle"
                                alt=""
                                width="100" height="100"
                            />
                        </div>
                    </div>
                    <div className='col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10 p-3'>
                        <div class="alert alert-dark">
                            <h4 class="alert-heading">Người dùng 1</h4>
                            <hr />
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2'>
                        <div className='comment-avatar'>
                            <img
                                src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                                class="rounded-circle"
                                alt=""
                                width="100" height="100"
                            />
                        </div>
                    </div>
                    <div className='col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10 p-3'>
                        <div class="alert alert-dark">
                            <h4 class="alert-heading">Người dùng 1</h4>
                            <hr />
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 col-xl-2'>
                        <div className='comment-avatar'>
                            <img
                                src="https://www.w3schools.com/bootstrap4/cinqueterre.jpg"
                                class="rounded-circle"
                                alt=""
                                width="100" height="100"
                            />
                        </div>
                    </div>
                    <div className='col-9 col-sm-9 col-md-10 col-lg-10 col-xl-10 p-3'>
                        <div class="alert alert-dark">
                            <h4 class="alert-heading">Người dùng 1</h4>
                            <hr />
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
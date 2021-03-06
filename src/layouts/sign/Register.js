import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { nameValidate, usernameValidate, emailValidate, phoneValidate } from '../../utils/validate'
import { register } from '../../services/authen.services'
import { useDispatch } from 'react-redux'
import { toggleLoading } from '../../redux/actions/web.actions'
import { getUserData } from '../../redux/actions/users.actions'

const Register = () => {
    const dispatch = useDispatch()

    const [emailErr, logEmailErr] = useState(false)
    const [usernameErr, logUsernameErr] = useState(false)
    const [fullNameErr, logFullNameErr] = useState(false)
    const [phoneNumberErr, logPhoneNumberErr] = useState(false)

    const [prePass, setPrePass] = useState('')
    const [passCheck, setPassCheck] = useState(false)

    const [userData, setUserData] = useState({})

    const history = useHistory()

    useEffect(() => {
        localStorage.clear()
    }, [])

    const emailValidation = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setUserData({
            ...userData,
            email: value
        })

        if (value !== '') {
            logEmailErr(!emailValidate(value))
        } else {
            logEmailErr(false)
        }
    }

    const phoneNumberValidate = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setUserData({
            ...userData,
            phone: value
        })

        if (value !== '') {
            logPhoneNumberErr(!phoneValidate(value))
        } else {
            logPhoneNumberErr(false)
        }
    }

    const usernameValidation = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setUserData({
            ...userData,
            username: value
        })

        if (value !== '') {
            logUsernameErr(!usernameValidate(value))
        } else {
            logUsernameErr(false)
        }
    }

    const fullNameValidation = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setUserData({
            ...userData,
            fullName: value
        })

        if (value !== '') {
            logFullNameErr(!nameValidate(value))
        } else {
            logFullNameErr(false)
        }
    }

    const getPrePass = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setPrePass(value)
    }

    const confirmPass = (e) => {
        let value = e.target.value || ''
        value = value.trim()
        setUserData({
            ...userData,
            password: value
        })

        if (value === '') {
            setPassCheck(false)
        }
        else if (value === prePass && value.length >= 6) {
            setPassCheck(false)
        } else {
            setPassCheck(true)
        }
    }

    const checkValidate = () => {
        if (!emailErr && !usernameErr && !fullNameErr && !passCheck) {
            return true
        } else return false
    }

    const submitHandle = (e) => {
        if (checkValidate()) {
            const data = {
                ...userData,
            }

            dispatch(toggleLoading(true))
            register(data)
                .then(res => {
                    if (res.data && res.data.status) {
                        dispatch(toggleLoading(false))
                        dispatch(getUserData({
                            ...res.data.user,
                            token: res.data.token,
                            login: true
                        }))
                        history.replace('/')
                    } else {
                        console.log('????ng k?? th???t b???i')
                    }
                })
                .catch(err => console.log(err))
                .then(() => {
                    dispatch(toggleLoading(false))
                })

        } else {
            alert('Th??ng tin kh??ng h???p l???!')
        }

        e.preventDefault()
    }

    return (
        <>
            <div className='sign-in-container'>
                <div className='sign-in-header'>
                    <div className='sign-in-logo-wrapper'>
                        <Link to='/'>
                            <img src='/images/logo.png' alt='logo' />
                        </Link>
                    </div>
                    <h1 className='sign-in-title'>Welcome!</h1>
                </div>
                <form onSubmit={(e) => submitHandle(e)} id='sign-in-form'>
                    <span style={{ fontFamily: 'mainFont' }}>H??? T??n:</span>
                    <input onChange={(e) => fullNameValidation(e)} className={fullNameErr ? 'validate-error' : ''} required name='firstName' placeholder='T??n' />
                    <label htmlFor='email'>Email: </label>
                    <input onChange={(e) => emailValidation(e)} className={emailErr ? 'validate-error' : ''} required id='email' placeholder='example@email.com' name='email' />
                    <label htmlFor='phone'>S??? ??i???n tho???i: </label>
                    <input onChange={phoneNumberValidate} className={phoneNumberErr ? 'validate-error' : ''} required id='phone' placeholder='+84...' name='phone' />
                    <label htmlFor='username'>T??n ????ng nh???p: </label>
                    <input onChange={(e) => usernameValidation(e)} className={usernameErr ? 'validate-error' : ''} required id='username' placeholder='ex: username123' name='username' />
                    <label htmlFor='password'>M???t kh???u: </label>
                    <input onChange={(e) => getPrePass(e)} required type='password' placeholder='a-z, 0-9, ??t nh???t 6 k?? t???.' id='password' name='password' />
                    <label htmlFor='re-password'>X??c nh???n m???t kh???u: </label>
                    <input onChange={(e) => confirmPass(e)} required className={passCheck ? 'validate-error' : ''} type='password' id='re-password' placeholder='******' name='rePassword' />
                    <div className='form-btn'>
                        <Link to='/login' className='sign-btn'>
                            ????ng nh???p
                        </Link>
                        <button className='sign-btn active'>
                            ????ng k??
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default Register
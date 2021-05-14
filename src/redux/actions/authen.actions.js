import * as API from "../../services/authen.services"

export const auth = () => {
  return (dispatch) => {
    API.auth().then((res) => {
      if (res.data && res.data.status) {
        let payload = {
          login: res.data.login,
          user: res.data.user,
        }
        dispatch(authAsync(payload))
      } else {
        console.log("Lỗi xác thực!")
      }
    })
  }
}

export const authAsync = (payload) => {
  return {
    type: "AUTHENTICATION",
    payload,
  }
}




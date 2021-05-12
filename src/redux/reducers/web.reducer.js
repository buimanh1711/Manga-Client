const initState = {
  menu: [
    {
      title: "Tổng quan",
      path: "/",
      icon: <i className="fas fa-chart-bar"></i>,
    },
    {
      title: "Quản lý khách hàng",
      path: "/clients",
      icon: <i className="fas fa-users" />,
    },
    {
      title: "Quản lý nhân viên",
      path: "/staffs",
      icon: <i className="fas fa-id-card"></i>,
    },
    {
      title: "Quản lý sản phẩm",
      path: "/products",
      icon: <i className="fas fa-shopping-bag"></i>,
    },
    {
      title: "Thông tin",
      path: "/about",
      icon: <i className="fas fa-info"></i>,
    },
  ],
  loading: false,
}

const webReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case "TOGGLE_LOADING": {
      return {
        ...state,
        loading: payload
      }
    }

    case "TOGGLE_LOGIN": {
      return {
        ...state,
        login: payload
      }
    }
  }

  return state
}

export default webReducer
const initialState = {
  login: false,
  auth: {},
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
  user: {
    _id: "",
    fullName: "",
    role: null,
    userImage: null,
    email: "",
    address: "",
    phone: "",
  },
  loading: false,
  users: [],
  userPage: {},
  stories: [],
  totalStories: 0,
  storyPage: {},
  chapters: [],
  totalChapters: 0,
  chapterPage: {},
  categories: [],
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ONE_GUEST": {
      return {
        ...state,
        guest: {
          ...action.payload,
        },
      }
    }

    case "GET_ALL_GUESTS": {
      return {
        ...state,
        guests: [...action.payload.guests],
        guestPage: action.payload.guestPage,
        totalGuests: action.payload.guestPage.totalGuests,
      }
    }

    case "CREATE_GUEST": {
      const { guests } = state
      return {
        ...state,
        guests: [...guests, action.payload],
      }
    }

    case "UPDATE_GUEST": {
      const { guests } = state
      const { _id } = action.payload
      return {
        ...state,
        guests: [...guests.filter((x) => x._id !== _id), action.payload],
      }
    }

    case "REMOVE_GUEST": {
      const { guests } = state

      return {
        ...state,
        guests: [...guests.filter((x) => x._id !== action.payload)],
      }
    }

    case "CREATE_USER": {
      const { users } = state
      return {
        ...state,
        users: [...users, action.payload],
      }
    }

    case "UPDATE_USER": {
      const { users } = state
      const { _id } = action.payload
      return {
        ...state,
        users: [...users.filter((x) => x._id !== _id), action.payload],
      }
    }

    case "REMOVE_USER": {
      const { users } = state

      return {
        ...state,
        users: [...users.filter((x) => x._id !== action.payload)],
      }
    }

    case "CREATE_PRODUCT": {
      const { products } = state
      return {
        ...state,
        products: [...products, action.payload],
      }
    }

    case "GET_ALL_PRODUCTS": {
      return {
        ...state,
        products: [...action.payload.products],
        productPage: action.payload.productPage,
      }
    }

    case "REMOVE_PRODUCT": {
      const { products } = state
      return {
        ...state,
        products: products.filter((x) => x._id !== action.payload),
      }
    }

    case "UPDATE_PRODUCT": {
      const { products } = state
      const { _id } = action.payload
      return {
        ...state,
        products: [...products.filter((x) => x._id !== _id), action.payload],
      }
    }

    case "GET_ALL_USERS": {
      return {
        ...state,
        users: [...action.payload.users],
        userPage: action.payload.userPage,
      }
    }

    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: [...action.payload],
      }
    }

    case "TOGGLE_LOADING": {
      return {
        ...state,
        loading: action.payload,
      }
    }

    case "GET_USER_DATA": {
      const {
        login,
        fullName,
        address,
        _id,
        image,
        role,
        token,
        email,
        username,
        phone,
      } = action.payload
      localStorage.setItem("accessToken", token)
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
        },
      }
    }

    case "AUTHENTICATION": {
      const { login, user } = action.payload
      const {
        fullName,
        address,
        _id,
        image,
        role,
        email,
        username,
        phone,
      } = user
      return {
        ...state,
        login: login,
        user: {
          _id,
          username,
          fullName,
          role,
          userImage: image,
          phone,
          email,
          address,
        },
      }
    }

    case "CLEAR_DATA": {
      return {
        ...state,
        login: false,
        user: {
          _id: "",
          username: "",
          fullName: "",
          role: "",
          userImage: null,
          phone: "",
          email: "",
          address: "",
        },
      }
    }
  }

  return state
}

export default globalReducer

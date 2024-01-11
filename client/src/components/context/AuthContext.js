import {createContext, useEffect, useReducer} from 'react'
//Khởi tạo trạng thái ban đầu, kiểm tra xem thông tin người dùng có được lưu vào localStorage hay không
let userItem = localStorage.getItem("user");
const INITIAL_STATE = {
  user: userItem && userItem !== "undefined" ? JSON.parse(userItem) : null, //Nếu user tồn tại thì lấy thông tin user còn không thì null
  loading: false,
  error: null,
};


export const AuthContext = createContext(INITIAL_STATE); // AuthContext được tạo ra bằng cách sử dụng createContext với INITIAL_STATE làm giá trị mặc định.

const AuthReducer = (state, action) => { //xử lý xác thực với các hành động liên quan
    switch (action.type) {
        case "LOGIN_START":// thực hiện đăng nhập
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":// đăng nhập thành công
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":// đăng nhập thất bại
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":// đăng xuất
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {// thực hiện lưu thông tin người dùng vào localStorage mỗi khi 1 user thay đổi
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    // children bao phủ các component và cho phép truy cập AuthContextProvider và component đó sẽ có quyền truy cập vào AuthContext.
    return (
        <AuthContext.Provider // trả về thông tin của user 
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
        {children} 
        </AuthContext.Provider>
    )
}

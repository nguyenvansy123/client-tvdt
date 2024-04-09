import { authConstants } from "./constants"
import axios from "../helpers/axios"
import { toast } from 'react-toastify';


export const signup = (user, navigate) => {
  return async dispatch => {

    dispatch({ type: authConstants.SIGNUP_REQUEST })
    const res = await axios.post("/signup", user, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }
      ).then((res) => {
      if (res.status === 201) {

        dispatch({ type: authConstants.SIGNUP_SUCCESS })

        // const { token, user } = res.data
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));

        // dispatch({
        //   type: authConstants.LOGIN_SUCCESS,
        // payload: {
        //   token,
        //   user
        // }
        // })

        toast.success(res.data.message)
        navigate("/login")

      }
    }).catch((_error) => {
      console.log(_error)
      dispatch({ type: authConstants.SIGNUP_FAILURE, payload: _error.response.data.message });
      toast.error(_error.response.data.message)
      console.log(_error);
    })


  }
}

export const login = (user, navigate) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    axios.post(`/signin`, user)
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
          navigate("/")
          toast.success("đăng nhập thành công")
        }
      })
      .catch((error) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: error.response.data },
        });
        toast.error(error.response.data.message)
      });
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};


export const signout = (navigate) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/admin/signout`);
    if (res.status === 200) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
      navigate("/")
      toast.success("đăng xuất thành công")
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error }
      });
    }
  };
};
const isLogin = () => {
    return window.localStorage.getItem("token")
}
export default isLogin
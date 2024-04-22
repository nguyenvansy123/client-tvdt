import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import store from "./Store";
import { Provider } from "react-redux";
import { SignupPage } from "./Pages/SignupPage"
import { LoginPage } from './Pages/LoginPage';
import { DetailPost } from './Pages/DetailPost';
import { ForgetPasswordPage } from './Pages/ForgetPasswordPage';
import { ArticleManagement } from './Pages/ArticleManagement';
import { Profile } from './Pages/Profile';
import { PrivateRoute } from './components/HOC/PrivateRoute';
import isLogin from './helpers/isLogin';
import { Navigate } from "react-router-dom";
import { ResetPassword } from './Pages/ResetPassword';
import { FilterPost } from './Pages/FilterPost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:slug/:id", element: <DetailPost /> },
      { path: "about", element: <About /> },
      { path: "signup", element: isLogin() ? <Navigate to="/" replace={true} /> : <SignupPage /> },
      { path: "login", element: isLogin() ? <Navigate to="/" replace={true} /> : <LoginPage /> },
      { path: "forgetpasswordpage", element: <ForgetPasswordPage /> },
      { path: "danh-muc/:slug", element: <ArticleManagement /> },
      { path: "article-management", element: <PrivateRoute component={ArticleManagement} /> },
      { path: "profile", element: <Profile /> },
      { path: "phan-loai/:slug", element: <FilterPost /> }
    ]
  },
  { path: "reset-password/:userId", element: <ResetPassword /> }
], {
  // basename: "/client-tvdt2"
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
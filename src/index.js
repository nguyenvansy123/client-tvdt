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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <DetailPost /> },
      { path: "about", element: <About /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "forgetpasswordpage", element: <ForgetPasswordPage /> },
      { path: "danh-muc/:slug", element: <ArticleManagement /> },
      { path: "article-management", element: <ArticleManagement /> },
      { path: "profile", element: <Profile /> },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
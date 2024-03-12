import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import React Router Dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Utils
import ScrollToTop from './utils/ScrollToTop';

// Import React Redux Store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

// Import User Page
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ShopPage from './pages/ShopPage/ShopPage';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import ShopCartPage from './pages/ShopCartPage/ShopCartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import MyAccountPage from './pages/MyAccountPage/MyAccountPage';
import ResultPage from './pages/ResultPage/ResultPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Import My Account Page
import OrderHistory from './components/MyAccountPage/OrderHistory';
import UserInfo from './components/MyAccountPage/UserInfo';
import Setting from './components/MyAccountPage/Setting';
import OrderDetail from './components/MyAccountPage/OrderDetail';

// Import Admin Page
import AdminPage from './pages/AdminPage/AdminPage';
import Page404 from './pages/AdminPage/404Page';
import Dashboard from './pages/AdminPage/Dashboard';
import Products from './pages/AdminPage/Products';
import Categories from './pages/AdminPage/Categories';
import Users from './pages/AdminPage/Users';
import Orders from './pages/AdminPage/Orders';
import CreateProduct from './components/AdminPage/Form/CreateProduct';
import Inbox from './pages/AdminPage/Inbox';
import Calendar from './pages/AdminPage/Calendar';

// Import Context
import { ChatContextProvider } from './context/ChatContext.jsx';

// Import User
const storageUser = JSON.parse(sessionStorage.getItem('user'))

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/shop',
        element: <ShopPage />
      },
      {
        path: '/shop/:id',
        element: <DetailProductPage />
      },
      {
        path: '/cart',
        element: <ShopCartPage />
      },
      {
        path: '/checkout',
        element: <CheckoutPage />
      },
      {
        path: '/checkout/result/:orderId',
        element: <ResultPage />
      },
      {
        path: '/account',
        element: <MyAccountPage />,
        children: [
          {
            index: true,
            element: <UserInfo />
          },
          {
            path: '/account/order-history',
            element: <OrderHistory />
          },
          {
            path: '/account/order-history/:orderid',
            element: <OrderDetail />
          },
          {
            path: '/account/settings',
            element: <Setting />
          },
        ]
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/signup',
        element: <RegisterPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      },
    ]
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/admin/products',
        element: <Products />
      },
      {
        path: '/admin/categories',
        element: <Categories />
      },
      {
        path: '/admin/users',
        element: <Users />
      },
      {
        path: '/admin/orders',
        element: <Orders />
      },
      {
        path: '/admin/create-product',
        element: <CreateProduct />
      },
      {
        path: '/admin/inbox',
        element: <Inbox />
      },
      {
        path: '/admin/calendar',
        element: <Calendar />
      },
      {
        path: '*',
        element: <Page404 />
      },
    ]
  }
])

// Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChatContextProvider user={storageUser?.user}>
        <RouterProvider router={router} />
      </ChatContextProvider>
    </Provider>
  </React.StrictMode>,
)

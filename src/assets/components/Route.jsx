import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';
import Root from './Root';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotePassword from '../pages/ForgotePassword';
import { AddProduct } from '../pages/AddProduct';
import Error from '../pages/Error';
import AddBrand from '../pages/AddBrand';
import Brand from './Brand';
import PrivateRoute from './PrivateRouter';
import Shop from '../pages/Shop';
import MyCart from '../pages/MyCart';
import Contact from '../pages/Contact';
import ProductDetailes from '../pages/ProductDetailes';
import BrandDetaile from './BrandDetaile';
import ProductUpdate from './ProductUpdate';

const Route = createBrowserRouter ([
    {
      path: "/",
      element: <Root> </Root>,
      errorElement: <Error> </Error>, 
      children: [
        {
            path: '/',
            element: <Home> </Home>
        },
        {
            path:'/login',
            element: <Login> </Login>
        },
        {
            path:'/register',
            element:<Register> </Register>
        },
        {
            path:'/forgote_password',
            element: <ForgotePassword> </ForgotePassword>
        },
        {
            path:'/add-product',
            element: <PrivateRoute> <AddProduct> </AddProduct> </PrivateRoute>
        },
        {
            path:'/add-brand',
            element: <AddBrand> </AddBrand>
        },
        {
            path:'/brand',
            element: <Brand> </Brand>
        },
        {
            path:'/my-cart',
            element: <PrivateRoute> <MyCart> </MyCart> </PrivateRoute>,
            loader: ()=> fetch('https://server-site-rho.vercel.app/addtocart')
        },
        {
            path:'/shop',
            element: <Shop> </Shop>,
        },
        {
            path:'/my-cart',
            element: <PrivateRoute> <MyCart> </MyCart> </PrivateRoute>
        },
        {
            path:'/contact',
            element: <Contact> </Contact>
        },
        {
            path:'/product-detail/:id',
            element:<PrivateRoute>  <ProductDetailes> </ProductDetailes> </PrivateRoute>,
            loader: ()=> fetch('https://server-site-rho.vercel.app/product')
        },
        {
            path:'/brand/:id',
            element: <BrandDetaile> </BrandDetaile> ,
            loader: ()=> fetch('https://server-site-rho.vercel.app/product')
        },
        {
            path:'/update/:id',
            element:<PrivateRoute> <ProductUpdate> </ProductUpdate> </PrivateRoute>,
            loader: ({params}) => fetch(`https://server-site-rho.vercel.app/products/${params.id}`)
        },
      ]
    },
  ]);


export default Route
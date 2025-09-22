import React from 'react';
import {
  createBrowserRouter,
 
} from "react-router";
import RootLayout from '../pages/Layout/RootLayout';

import Register from '../pages/Register';
import AddLostFound from '../pages/AddLostFound';
import AllRecovered from '../pages/AllRecovered';
import ManageMyItems from '../pages/ManageMyItems';
import LostAndFound from '../pages/LostAndFound';
import Login from '../pages/Login';
import Home from '../pages/Home/Home';
import DetailsPage from '../pages/Shared/DetailsPage';
import PrivateRoute from '../routes/PrivateRoute';
import UpdateItems from '../pages/UpdateItems';
import ErrorPage from '../pages/errorPage';
import PostPage from '../pages/PostPage';

const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   children: [
    {
      index: true,
      Component: Home
    },
    {
      path: 'lostAndFound',
      Component: LostAndFound

    },
    {
      path: 'register',
      Component: Register
    },
    {
      path: 'login',
      Component: Login
    },
    {
      path: 'addLostFound',
      element: <PrivateRoute><AddLostFound></AddLostFound></PrivateRoute>
    },
    {
      path: 'allRecovered',
      element: <PrivateRoute><AllRecovered></AllRecovered></PrivateRoute> 
    },
    {
      path: 'manageMyItems',
      loader: () => fetch(`https://lost-found-server-six.vercel.app/lost`),
      element: <PrivateRoute><ManageMyItems></ManageMyItems></PrivateRoute> 
    },
    {
      path: '/lost/:id',
      loader: ({params}) => fetch(`https://lost-found-server-six.vercel.app/lost/${params.id}`),
      element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>
    },
    {
      path: 'updateItems/:id',
      loader: ({params}) => fetch(`https://lost-found-server-six.vercel.app/lost/${params.id}`),
      element: <PrivateRoute><UpdateItems></UpdateItems></PrivateRoute>
    },
    {
      path: 'postPage',
      loader: () => fetch(`https://lost-found-server-six.vercel.app/lost`),
      element: <PrivateRoute><PostPage></PostPage></PrivateRoute>
    },

    {
      path: '/*',
      element: <ErrorPage></ErrorPage>
    }

   ]
  },
]);

export default router;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Less from './Pages/LESS/LESS';
import Sass from './Pages/Sass/Sass';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/page-1',
    element: <Page1 />
  },
  {
    path: '/page-2',
    element: <Page2 />
  },
  {
    path: '/page-3',
    element: <Page3 />
  },
  {
    path: '/page-4',
    element: <Page4 />
  },
  {
    path: '/less',
    element: <Less />
  },
  {
    path: '/sass',
    element: <Sass />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

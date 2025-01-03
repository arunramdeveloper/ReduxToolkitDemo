import React from 'react'
import { Outlet } from 'react-router-dom'
import NavPanel from './NavPanel'
import { Provider } from 'react-redux';
import store from '../store/Store';

export default function RootLayout() {
  return (
    <>
    <Provider store={store} > 
    <NavPanel/>

    <main>
        <Outlet />
    </main>
    </Provider>
    
    </>
  )
}

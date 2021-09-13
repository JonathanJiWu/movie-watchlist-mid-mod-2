import './App.css';

import React from 'react'
import Header from './comp/Header';
import Search from './comp/Search';
import UserWatchList from './comp/UserWatchList';
import Footer from './comp/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <UserWatchList/>
      <Footer/>
    </div>
  )
}

export default App

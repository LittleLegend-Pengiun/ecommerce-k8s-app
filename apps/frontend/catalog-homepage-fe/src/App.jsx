import React from 'react'
import HomePage from './HomePage/HomePage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
function App() {
  return (
    <div>
      <HeaderComponent/>
        <HomePage/>
      <FooterComponent/>
    </div>
  )
};
export default App
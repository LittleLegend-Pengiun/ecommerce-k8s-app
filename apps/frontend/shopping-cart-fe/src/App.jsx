import React from 'react'
import ShoppingCartPage from './ShoppingCartPage/ShoppingCartPage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
function App() {
  return (
    <div>
      <HeaderComponent />
        <ShoppingCartPage />
      <FooterComponent />
    </div>
  )
};
export default App
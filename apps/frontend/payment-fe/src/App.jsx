import React from 'react'
import PaymentPage from './PaymentPage/PaymentPage'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
function App() {
  return (
    <div>
      <HeaderComponent/>
        <PaymentPage/>
      <FooterComponent/>
    </div>
  )
};
export default App
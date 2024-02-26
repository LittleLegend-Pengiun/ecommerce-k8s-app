import { memo} from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import viteLogo from '/vite.svg'
import MasterLayout from './theme/masterLayout'
import ProductDetailPage from './ProductDetailPage/ProductDetailPage'

function App() {

  return (
    <MasterLayout>
      <ProductDetailPage />
    </MasterLayout>
  )
}

export default memo(App)

import { useEffect, useState, memo} from 'react'
import viteLogo from '/vite.svg'
import Header from './theme/header'
import MasterLayout from './theme/masterLayout'
import HomePage from './HomePage'

function App() {

  return (
    <>
      <MasterLayout>
        <HomePage />
      </MasterLayout>
    </>
  )
}

export default memo(App)

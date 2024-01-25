import { useEffect, useState, memo} from 'react'
import viteLogo from '/vite.svg'
import Header from './theme/header'

function App() {

  return (
    <>
      <Header />
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  )
}

export default memo(App)

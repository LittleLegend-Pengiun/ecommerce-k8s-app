import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("");
  async function fetchData() {
    try {
      const res = await fetch(`${process.env.MS_URL}/data`, {
        method: 'GET',
        // mode: 'no-cors'
      })
      const json = await res.json();
      setData(json?.message);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => { fetchData() }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>The message from backend: {data}</p>
      </div>
    </>
  )
}

export default App

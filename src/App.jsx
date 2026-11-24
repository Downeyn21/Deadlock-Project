import './App.css'
import { useEffect } from 'react'

function App() {
  const api = 'https://api.deadlock-api.com'

  async function request(x) {
    const res = await fetch(`${api}${x}`)
    const data = await res.json()
  }

  request('/v1/analytics/hero-stats')

  useEffect(() => {

  }, [])

  return (
    <>
      <div>
          Hello world
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import { AppContext } from "./context/contextApi"

function App() {

  return (
    <>
    <AppContext>
      <div className="app">App</div>
    </AppContext>
    </>
  )
}

export default App

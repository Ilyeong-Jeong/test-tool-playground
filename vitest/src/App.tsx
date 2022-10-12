import reactLogo from './assets/react.svg'
import './App.css'
import { useCounter } from './useCounter'

function App() {
  const { increment, decrement, count } = useCounter();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{count}</p>
      <div className="card">
        <button onClick={() => increment()}>
          +
        </button>
        <button onClick={() => decrement()}>
          -
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

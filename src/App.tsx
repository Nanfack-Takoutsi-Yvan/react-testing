import './App.css'
import Application from './components/application'
import { Counter } from './components/couter'
import { MuiMode } from './components/muiMode'
import { Skills } from './components/skills'
import { AppProviders } from './providers/appProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={['HTML', 'CSS']} />
        <Counter />
        {/* <CounterTwo count={1} /> */}
        {/* <Users /> */}
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
import { init } from '@neutralinojs/lib'
import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'
import HomeScreen from './pages/Home'
import CreditsScreen from './pages/Credits'
import PlayScreen from './pages/Play'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

export function App() {
  const NotFound = () => {
    location.replace('/')
    return false
  }

  return (
    <LocationProvider>
      <main class="fixed inset-0 bg-dark-900 text-light select-none cursor-default">
        <Router>
          <Route path="/" component={HomeScreen} />
          <Route path="/play" component={PlayScreen} />
          <Route path="/credits" component={CreditsScreen} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app'))
init()

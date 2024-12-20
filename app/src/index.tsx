import { init } from '@neutralinojs/lib'
import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'
import HomeScreen from './pages/Home'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

export function App() {
  const NotFound = () => {
    location.replace('/')
    return false
  }

	return (
		<LocationProvider>
			<main class="fixed inset-0 bg-dark-900 text-light">
				<Router>
					<Route path="/" component={HomeScreen} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	)
}

render(<App />, document.getElementById('app'))
init()

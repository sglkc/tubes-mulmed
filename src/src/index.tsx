import { filesystem, init } from '@neutralinojs/lib';
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { useEffect } from 'preact/hooks';

export function App() {

  useEffect(() => {
    filesystem.readDirectory('/').then(console.log).catch(console.error)
  }, [])

	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
init();

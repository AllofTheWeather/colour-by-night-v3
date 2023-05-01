import { Nav } from './nav';
import { Site } from './pages';
import NavProvider from './context/NavContext';
import './App.css';

function App() {
	return (
		<div className='appContainer'>
			<NavProvider>
				<Nav />
				<Site />
			</NavProvider>
		</div>
	);
}

export default App;

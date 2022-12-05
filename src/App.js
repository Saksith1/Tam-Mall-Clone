import './App.css';
import TopBar from './components/TopBar';
import MiddleBar from './components/MiddleBar';
import Menu from './components/Menu';

function App() {
  return (
    <div className='app'>
          <TopBar/>
          <MiddleBar/>
          <Menu/>
    </div>
  );
}

export default App;

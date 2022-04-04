import './App.css';
import Counter from './components/Counter';
import DarkLight from './components/DarkLight';
import SmallBig from './components/SmallBig';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Counter />
      <DarkLight />
      <SmallBig />
      <User />
    </div>
  );
}

export default App;

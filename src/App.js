import './App.css';
import Counter from './features/Counter';
import DarkLight from './features/DarkLight';
import SmallBig from './features/SmallBig';
import User from './features/User';

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

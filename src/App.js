import './App.css';
import Counter from './components/Counter';
import DarkLight from './components/DarkLight';
import Posts from './components/Posts';
import SmallBig from './components/SmallBig';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Counter />
      <DarkLight />
      <SmallBig />
      <User />
      <Posts />
    </div>
  );
}

export default App;

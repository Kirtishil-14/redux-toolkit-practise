import './App.css';
import Counter from './features/Counter';
import DarkLight from './features/DarkLight';
import SmallBig from './features/SmallBig';

function App()
{
  return (
    <div className="App">
      <Counter />
      <DarkLight />
      <SmallBig />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Body from './Body/Body'

function App() {
  let pet = 'Palestrina';
  return (
    <div className="App">
      <Body pet={pet}/>
      <p>App: { pet }</p>
    </div>
  );
}

export default App;

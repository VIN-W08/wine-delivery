import './App.css';
import Header from './components/Header';
import WineList from './components/WineList';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="body">
        <WineList/>
      </div>
    </div>
  );
}

export default App;

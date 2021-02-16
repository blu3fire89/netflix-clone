import './App.css';
import Row from './components/RowComponent';
import request from './components/request';

function App() {
  return (
    <div className="App">
      <h1>This is the netflix clone project</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
